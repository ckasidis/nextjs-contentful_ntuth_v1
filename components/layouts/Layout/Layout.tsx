import { NextPage } from 'next';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: NextPage = ({ children }) => {
	return (
		<div>
			<Header />
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
