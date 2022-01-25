import Head from 'next/head';

const ServerErrorPage = () => {
	return (
		<main className="main">
			<Head>
				<title>Server Error</title>
			</Head>
			<h1>500 | Server Error</h1>
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

export default ServerErrorPage;
