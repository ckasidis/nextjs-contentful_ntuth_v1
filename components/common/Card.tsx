import { NextPage } from 'next';

const Card: NextPage = ({ children }) => {
	return (
		<div className="Card">
			{children}
			<style jsx>{`
				.Card {
					background-color: var(--bg-container);
					width: min(80vw, 60rem);
					margin: 4em auto;
					padding: 3em 0;
					border-radius: 2em;
				}
			`}</style>
		</div>
	);
};

export default Card;
