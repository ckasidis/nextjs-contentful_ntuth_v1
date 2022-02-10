import { NextPage } from 'next';
import Head from 'next/head';

const ServerErrorPage: NextPage = () => {
	return (
		<main className="center">
			<Head>
				<title>Server Error</title>
			</Head>
			<h1>500 | Server Error</h1>
		</main>
	);
};

export default ServerErrorPage;
