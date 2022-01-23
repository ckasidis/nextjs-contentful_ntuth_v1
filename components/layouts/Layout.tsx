import { NextPage } from 'next';
import Head from 'next/head';
import styles from './Layout.module.scss';
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
			<div className={styles.container}>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
