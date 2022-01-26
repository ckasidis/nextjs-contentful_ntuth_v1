import { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
	return (
		<header className="header">
			<div className="logo">
				<Link href="/">logo</Link>
			</div>
			<nav>
				<ul className="list">
					<li>
						<Link href="/guide">guides</Link>
					</li>
					<li>
						<Link href="/event">events</Link>
					</li>
					<li>
						<Link href="/member">members</Link>
					</li>
					<li>
						<Link href="/about">about</Link>
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

				.list {
					display: flex;
					gap: 1rem;
				}
			`}</style>
		</header>
	);
};

export default Header;
