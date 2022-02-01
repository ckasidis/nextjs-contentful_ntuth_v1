import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { motion } from 'framer-motion';
import Layout from '../components/layouts/Layout';

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
		<Layout>
			<motion.div
				key={router.route}
				variants={pageTransition}
				initial="hidden"
				animate="visible"
			>
				<Component {...pageProps} />
			</motion.div>
		</Layout>
	);
}

export default MyApp;
