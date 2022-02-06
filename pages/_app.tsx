import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';

function MyApp({ Component, pageProps, router }: AppProps) {
	const pageTransition = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<div>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Header />
			<motion.div
				className="app-container"
				key={router.route}
				variants={pageTransition}
				initial="hidden"
				animate="visible"
			>
				<Component {...pageProps} />
			</motion.div>
			<Footer />
		</div>
	);
}

export default MyApp;
