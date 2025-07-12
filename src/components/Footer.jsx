import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2025;

  return (
    <footer style={{
      marginTop: '2rem',
      textAlign: 'center',
      color: '#6b7280'
    }}>
      &copy; {startYear === currentYear ? startYear : `${startYear}-${currentYear}`} - Développé par <a href="https://esperluweb.com" style={{ color: '#3b82f6' }} target="_blank" rel="noopener noreferrer">EsperluWeb</a> / <a href="https://gregoireboisseau.fr" style={{ color: '#3b82f6' }} target="_blank" rel="noopener noreferrer">Grégoire Boisseau</a>
    </footer>
  );
}

export default Footer;
