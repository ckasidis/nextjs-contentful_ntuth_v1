import styles from './Footer.module.css';
import { NextPage } from 'next';

const Footer: NextPage = () => {
	return (
		<footer className={styles.footer}>
			<p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
		</footer>
	);
};

export default Footer;
