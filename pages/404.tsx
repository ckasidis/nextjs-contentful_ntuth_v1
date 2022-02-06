import { NextPage } from 'next';
import Head from 'next/head';

const PageNotFound: NextPage = () => {
	return (
		<main className="center">
			<Head>
				<title>Page Not Found</title>
			</Head>
			<h1>404 | Page Not Found</h1>
		</main>
	);
};

export default PageNotFound;
