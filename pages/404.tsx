import { NextPage } from 'next';
import Head from 'next/head';

const PageNotFound: NextPage = () => {
	return (
		<main className="main">
			<Head>
				<title>Page Not Found</title>
			</Head>
			<h1>404 | Page Not Found</h1>
			<style jsx>{`
				.main {
					min-height: inherit;
					display: grid;
					place-items: center;
				}
			`}</style>
		</main>
	);
};

export default PageNotFound;
