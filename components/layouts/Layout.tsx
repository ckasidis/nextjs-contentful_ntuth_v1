import { NextPage } from 'next';
import Header from './Header';

const Layout: NextPage = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
