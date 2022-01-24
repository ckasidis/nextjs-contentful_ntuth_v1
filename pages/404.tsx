import { NextPage } from 'next';
import Head from 'next/head';
import styles from './404.module.scss';

const PageNotFound: NextPage = () => {
	return (
		<main className={styles.main}>
			<Head>
				<title>Page Not Found</title>
			</Head>
			<h1>404 | Page Not Found</h1>
		</main>
	);
};

export default PageNotFound;
