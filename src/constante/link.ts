import STRING from './String';
/**
 * @description Constant array containing navigation links used in the application
 */
const LINKS = [
    { name: STRING.FR.LINK.HOME, href: '#' },
    { name: STRING.FR.LINK.PROFIL, href: '#' },
    { name: STRING.FR.LINK.SETING, href: '#' },
    { name: STRING.FR.LINK.COMUNITY, href: '#' },
] as const;
/**
 * @description Constant array containing navigation icons used in the application
 */
export const NAV_ICONS = [
    { imgSrc: '/yoga.svg', alt: 'yoga' },
    { imgSrc: '/swimming.svg', alt: 'swimming' },
    { imgSrc: '/cycle.svg', alt: 'cycle' },
    { imgSrc: '/gym.svg', alt: 'gym' },
] as const;

export default LINKS;
