export function nettoyerTexte(texte) {
  if (!texte) return '';
  
  return texte
    .replace(/[’‘]/g, "'")
    .replace(/[“”«»]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/…/g, '...')
    .replace(/\u00A0/g, ' ');
}
