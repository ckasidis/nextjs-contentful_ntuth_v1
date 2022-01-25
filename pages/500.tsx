import Head from 'next/head';

const ServerErrorPage = () => {
	return (
		<main>
			<Head>
				<title>Page Not Found</title>
			</Head>
			<h1>500 | Page Not Found</h1>
		</main>
	);
};

export default ServerErrorPage;
