import React from 'react';

function TextDisplay({ cleanedText, onCopy, isCopied }) {
  return (
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
          onClick={onCopy}
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
  );
}

export default TextDisplay;
