import React from 'react';

function TextAreaInput({ value, onChange }) {
  return (
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
          {value.length} caractères
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
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextAreaInput;
