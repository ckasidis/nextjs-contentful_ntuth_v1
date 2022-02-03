import { NextPage } from 'next';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

const Header: NextPage = () => {
	return (
		<header className="header">
			<div className="logo">
				<Link href="/">
					<a className="header-link">logo</a>
				</Link>
			</div>

			<nav className="navbar-nav">
				<button className="hamburger-menu">
					<span className="sr-only">Menu</span>
					<GiHamburgerMenu />
				</button>

				<ul className="navbar-list">
					<li>
						<Link href="/guide">
							<a className="header-link">guides</a>
						</Link>
					</li>
					<li>
						<Link href="/event">
							<a className="header-link">events</a>
						</Link>
					</li>
					<li>
						<Link href="/member">
							<a className="header-link">members</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a className="header-link">about</a>
						</Link>
					</li>
				</ul>
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

				.header-link {
					color: var(--link-alternate);
				}

				.navbar-list {
					display: flex;
					gap: 1rem;
				}

				.hamburger-menu {
					display: none;
					border: none;
				}

				@media (max-width: 40em) {
					.navbar-list {
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
