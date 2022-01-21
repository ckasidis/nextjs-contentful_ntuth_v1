import { NextPage } from 'next';
import Header from './Header';
import Footer from './Footer';

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
