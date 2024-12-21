export interface typeData {
  number    : string;
  whatsapp  : string;
  instagram : string;
  tiktok    : string;
  LOCATION  : string;
}
export const SocialData: typeData = {
  number: '+18574104599',
  whatsapp: '+18574104599',
  instagram: 'nanoart_tattoo',
  tiktok: 'nanotattoo23',
  LOCATION: 'Boston, Massachusetts.',
}

export const SOCIAL_LINKS = {
  WHATSAPP: `https://wa.me/${SocialData.number}`,
  INSTAGRAM: `https://instagram.com/${SocialData.instagram}`,
  TIKTOK: `https://tiktok.com/@${SocialData.tiktok}`
}