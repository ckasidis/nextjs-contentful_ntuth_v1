import { NextPage } from 'next';
import styles from './Header.module.scss';

const Header: NextPage = () => {
	return (
		<header className={styles.header}>
			<div>logo</div>
			<nav>
				<ul className={styles.list}>
					<li>a</li>
					<li>b</li>
					<li>c</li>
					<li>d</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
