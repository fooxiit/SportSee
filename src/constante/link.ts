import STRING from './String';

const LINKS = [
    { name: STRING.FR.LINK.HOME, href: '#' },
    { name: STRING.FR.LINK.PROFIL, href: '#' },
    { name: STRING.FR.LINK.SETING, href: '#' },
    { name: STRING.FR.LINK.COMUNITY, href: '#' },
] as const;

export const NAV_ICONS = [
    { imgSrc: '/yoga.svg', alt: 'yoga' },
    { imgSrc: '/swimming.svg', alt: 'swimming' },
    { imgSrc: '/cycle.svg', alt: 'cycle' },
    { imgSrc: '/gym.svg', alt: 'gym' },
] as const;

export default LINKS;
