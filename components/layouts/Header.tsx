import { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
	return (
		<header className="header">
			<div className="logo">
				<Link href="/">
					<a className="header-link">logo</a>
				</Link>
			</div>
			<nav>
				<ul className="list">
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
					z-index: 99;
					top: 0;
					background-color: var(--primary);
					min-height: var(--header-height);
					padding: 0 2rem;
				}

				.header-link {
					color: var(--link-alternate);
				}

				.list {
					display: flex;
					gap: 1rem;
				}
			`}</style>
		</header>
	);
};

export default Header;
