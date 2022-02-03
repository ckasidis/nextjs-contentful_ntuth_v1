import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileNavigation from './MobileNavigation';

const Header: NextPage = () => {
	const [open, setOpen] = useState(false);

	const toggleMenu = (): void => {
		setOpen(!open);
	};

	const menuItems = (
		<>
			<li>
				<Link href="/guide">
					<a className="nav-link">guides</a>
				</Link>
			</li>
			<li>
				<Link href="/event">
					<a className="nav-link">events</a>
				</Link>
			</li>
			<li>
				<Link href="/member">
					<a className="nav-link">members</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a className="nav-link">about</a>
				</Link>
			</li>
		</>
	);

	return (
		<header className="header">
			<div className="logo">
				<Link href="/">
					<a className="logo">logo</a>
				</Link>
			</div>

			{open && (
				<MobileNavigation close={() => setOpen(!open)}>
					{menuItems}
				</MobileNavigation>
			)}

			<nav>
				<button className="hamburger-menu" onClick={toggleMenu}>
					<span className="sr-only">Menu</span>
					<GiHamburgerMenu />
				</button>
				<ul className="list">{menuItems}</ul>
			</nav>
			<style jsx>{`
				.header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					position: sticky;
					z-index: 9999;
					top: 0;
					background-color: var(--primary);
					min-height: var(--header-height);
					padding: 0 2rem;
				}

				.logo {
					color: var(--link-alternate);
				}

				.list {
					display: flex;
					gap: 1rem;
				}

				.hamburger-menu {
					display: none;
					border: none;
				}

				@media (max-width: 40em) {
					.list {
						display: none;
					}
					.hamburger-menu {
						display: block;
					}
				}
			`}</style>
		</header>
	);
};

export default Header;
