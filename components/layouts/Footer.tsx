import { NextPage } from 'next';

const Footer: NextPage = () => {
	return (
		<footer className="footer">
			<p>Footer Text</p>
			<style jsx>{`
				.footer {
					display: grid;
					place-items: center;
					background-color: var(--primary);
					min-height: var(--footer-height);
				}
			`}</style>
		</footer>
	);
};

export default Footer;
