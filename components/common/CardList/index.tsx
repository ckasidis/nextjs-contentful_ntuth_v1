import styles from './CardList.module.css';
import { NextPage } from 'next';

const CardList: NextPage = ({ children }) => {
	return <div className={styles.list}>{children}</div>;
};

export default CardList;
