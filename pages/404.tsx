import { NextPage } from 'next';
import styles from './404.module.scss';

const PageNotFound: NextPage = () => {
	return (
		<div className={styles.container}>
			<h1>404 | Page Not Found</h1>
		</div>
	);
};

export default PageNotFound;
