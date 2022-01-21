import { NextPage } from 'next';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout: NextPage = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
