import styles from './BlogContainer.module.css';
import { NextPage } from 'next';

const BlogContainer: NextPage = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default BlogContainer;
