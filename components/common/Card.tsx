import { NextPage } from 'next';

const Card: NextPage = ({ children }) => {
	return (
		<div className="Card">
			{children}
			<style jsx>{`
				.Card {
					background-color: var(--bg-container);
					width: min(85vw, 60rem);
					margin: min(7.5vw, 4rem) auto;
					padding: 2em 0;
					border-radius: 2em;
				}
			`}</style>
		</div>
	);
};

export default Card;
