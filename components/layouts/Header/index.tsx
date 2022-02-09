import styles from './Header.module.css';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header: NextPage = () => {
	const [open, setOpen] = useState<boolean | null>(null);

	const toggleMenu = (): void => {
		setOpen(!open);
	};

	return (
		<header className={`${styles.header}`}>
			<div className={styles.showMobile}>
				<Link href="/">
					<a className={styles.logo}>logo</a>
				</Link>
			</div>
			<div className={open ? styles.backdrop : ''} onClick={toggleMenu}>
				<nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
					<ul className={styles.list}>
						<li>
							<Link href="/guide">
								<a className={styles.navLink}>guides</a>
							</Link>
						</li>
						<li>
							<Link href="/event">
								<a className={styles.navLink}>events</a>
							</Link>
						</li>
						<li>
							<Link href="/member">
								<a className={styles.navLink}>members</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a className={styles.navLink}>about</a>
							</Link>
						</li>
					</ul>
				</nav>
				<button
					className={`${styles.hamburgerMenu} ${
						open ? styles.hamburgerMenuActive : ''
					}`}
					onClick={toggleMenu}
				>
					<span className="sr-only">Menu</span>
					<GiHamburgerMenu />
				</button>
			</div>
		</header>
	);
};

export default Header;
