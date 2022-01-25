import { NextPage } from 'next';

const Header: NextPage = () => {
	return (
		<header className="header">
			<div>logo</div>
			<nav>
				<ul className="list">
					<li>a</li>
					<li>b</li>
					<li>c</li>
					<li>d</li>
				</ul>
			</nav>
			<style jsx>{`
				.header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					position: sticky;
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
