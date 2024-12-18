export const SOCIAL_LINKS = {
  WHATSAPP: {
    number: '+18574104599',
    url: (number: string) => `https://wa.me/${number}`,
  },
  INSTAGRAM: {
    username: 'nanoart_tattoo',
    url: (username: string) => `https://instagram.com/${username}`,
  },
  TIKTOK: {
    username: 'nanotattoo23',
    url: (username: string) => `https://tiktok.com/@${username}`,
  },
};