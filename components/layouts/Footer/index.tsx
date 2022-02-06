import styles from './Footer.module.css';
import { NextPage } from 'next';

const Footer: NextPage = () => {
	return (
		<footer className={styles.footer}>
			<p>Footer Text</p>
		</footer>
	);
};

export default Footer;
