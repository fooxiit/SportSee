import LINKS from '../../constante/link';
import Link from '../link/Link';
import './header.css';

export default function Header() {
    return (
        <header className="header flex flex--centre-item">
            <img className="header__logo" src="/logo.png" alt="logo" />
            <nav className="header__nav flex ">
                {LINKS.map((link, index) => (
                    <Link key={`navLink-${index}`} classname="header__nav__link" href={link.href}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
