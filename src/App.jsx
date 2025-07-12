import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TextAreaInput from './components/TextAreaInput';
import TextDisplay from './components/TextDisplay';
import { nettoyerTexte } from './utils/textUtils';

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
        <Header />
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          '@media (min-width: 768px)': {
            flexDirection: 'row'
          }
        }}>
          <TextAreaInput 
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)} 
          />
          <TextDisplay 
            cleanedText={cleanedText} 
            onCopy={handleCopy} 
            isCopied={isCopied} 
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App