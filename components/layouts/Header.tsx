import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header: NextPage = () => {
	const [open, setOpen] = useState(false);

	const toggleMenu = (): void => {
		setOpen(!open);
	};

	return (
		<header className="header">
			<div className="logo">
				<Link href="/">
					<a className="logo">logo</a>
				</Link>
			</div>
			<div className={`${open ? 'backdrop' : ''}`} onClick={toggleMenu}>
				<nav className={`${open ? 'nav-expand' : ''}`}>
					<ul className={`list ${open ? 'list-expand' : ''}`}>
						{' '}
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
					</ul>
				</nav>
			</div>
			<button className="hamburger-menu" onClick={toggleMenu}>
				<span className="sr-only">Menu</span>
				<GiHamburgerMenu />
			</button>
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

				.nav-link {
					color: var(--link-alternate);
				}

				.list {
					display: flex;
					gap: 1rem;
				}

				.hamburger-menu {
					display: none;
				}

				@media (max-width: 40em) {
					.hamburger-menu {
						display: block;
						border: none;
					}

					.list {
						display: none;
					}

					.nav-expand {
						position: fixed;
						top: 0;
						right: 0;
						background-color: var(--primary);
						height: 100vh;
						width: min(60vw, 20rem);
					}

					.list-expand {
						padding-top: 4rem;
						display: flex;
						flex-direction: column;
						gap: 1rem;
						align-items: center;
					}

					.backdrop {
						position: fixed;
						top: 0;
						left: 0;
						width: 100vw;
						height: 100vh;
						background-color: rgba(0, 0, 0, 0.75);
					}
				}
			`}</style>
		</header>
	);
};

export default Header;
