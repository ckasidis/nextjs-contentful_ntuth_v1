import { NextPage } from 'next';
import styles from './Footer.module.scss';

const Footer: NextPage = () => {
	return (
		<footer className={styles.footer}>
			<p>Footer Text</p>
		</footer>
	);
};

export default Footer;
