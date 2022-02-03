import { NextPage } from 'next';

interface Props {
	close: () => void;
}

const MobileNavigation: NextPage<Props> = ({ close, children }) => {
	return (
		<div className="backdrop" onClick={close}>
			<nav className="nav-expand">
				<ul className="list-expand">{children}</ul>
			</nav>
			<style jsx>{`
				.backdrop {
					position: fixed;
					top: 0;
					left: 0;
					width: 100vw;
					height: 100vh;
					background-color: rgba(0, 0, 0, 0.75);
				}

				.nav-expand {
					position: fixed;
					top: 0;
					right: 0;
					background-color: var(--primary);
					height: 100vh;
					width: min(60vw, 25rem);
				}

				.list-expand {
					padding-top: 4rem;
					display: flex;
					flex-direction: column;
					gap: 1rem;
					align-items: center;
				}
			`}</style>
		</div>
	);
};

export default MobileNavigation;
