export const siteConfig = {
  name: 'BADCAWS',

  tagline: 'Building Games. Creating Worlds.',

  description:
    'BadCaws provides game development, art, design, technical art, and creative services.',

  contact: {
    email: 'workwithbadcaws@gmail.com',
    instagram: 'YOUR_INSTAGRAM_URL_HERE',
    linkedin: 'YOUR_LINKEDIN_URL_HERE',
  },

  navigation: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
} as const;
