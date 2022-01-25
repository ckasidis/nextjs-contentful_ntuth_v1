import { NextPage } from 'next';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout: NextPage = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Header />
			<div className="container">{children}</div>
			<Footer />
			<style jsx>{`
				.container {
					background-color: $bg-primary;
					min-height: calc(100vh - var(--header-height) - var(--footer-height));
				}
			`}</style>
		</>
	);
};

export default Layout;
