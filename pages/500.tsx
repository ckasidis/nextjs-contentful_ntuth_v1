import Head from 'next/head';

const ServerErrorPage = () => {
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
