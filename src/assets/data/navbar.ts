import Logo from '@assets/images/navbar/authentic.png';
import Flag from '@assets/images/navbar/usa.svg';
import type { NavbarContent } from '@interfaces/navInterface';


export const navbarContent: NavbarContent = {
    logo: {
        src: Logo,
        alt: 'Logo'
    },
    flag: {
        src: Flag,
        alt: 'USA'
    },
    flagTxt: 'English',
    signInBtn: {
        label: 'Sign In',
        url: '/'
    }
};

export default navbarContent;
