import { useState } from 'react';
import './index.css';

function nettoyerTexte(texte) {
  if (!texte) return '';
  
  return texte
    .replace(/[’‘]/g, "'")
    .replace(/[“”«»]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/…/g, '...')
    .replace(/\u00A0/g, ' ');
}

function App() {
  const [inputText, setInputText] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const cleanedText = nettoyerTexte(inputText);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanedText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie :', err);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '1rem',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1f2937'
        }}>
          Nettoyeur de texte
        </h1>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          '@media (min-width: 768px)': {
            flexDirection: 'row'
          }
        }}>
          {/* Zone de texte d'entrée */}
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <label htmlFor="input-text" style={{
                fontWeight: 500,
                color: '#374151'
              }}>
                Texte original
              </label>
              <span style={{
                fontSize: '0.875rem',
                color: '#6b7280'
              }}>
                {inputText.length} caractères
              </span>
            </div>
            <textarea
              id="input-text"
              style={{
                width: '100%',
                height: '16rem',
                padding: '1rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                resize: 'none',
                outline: 'none',
                transition: 'all 0.2s',
                fontFamily: 'inherit',
                fontSize: '1rem',
                lineHeight: '1.5'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#3b82f6';
                e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
              placeholder="Collez votre texte ici..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          
          {/* Zone de texte de sortie */}
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <label style={{
                fontWeight: 500,
                color: '#374151'
              }}>
                Texte nettoyé
              </label>
              <span style={{
                fontSize: '0.875rem',
                color: '#6b7280'
              }}>
                {cleanedText.length} caractères
              </span>
            </div>
            <div style={{ position: 'relative' }}>
              <textarea
                readOnly
                style={{
                  width: '100%',
                  height: '16rem',
                  padding: '1rem',
                  backgroundColor: '#f9fafb',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  resize: 'none',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  lineHeight: '1.5'
                }}
                value={cleanedText}
              />
              <button
                onClick={handleCopy}
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  backgroundColor: isCopied ? '#10b981' : '#3b82f6',
                  opacity: !cleanedText ? 0.6 : 1,
                  pointerEvents: !cleanedText ? 'none' : 'auto'
                }}
                onMouseOver={(e) => {
                  if (!isCopied && cleanedText) {
                    e.target.style.backgroundColor = '#2563eb';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isCopied && cleanedText) {
                    e.target.style.backgroundColor = '#3b82f6';
                  }
                }}
              >
                {isCopied ? 'Copié !' : 'Copier'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
