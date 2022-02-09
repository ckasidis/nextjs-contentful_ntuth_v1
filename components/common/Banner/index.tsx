import styles from './Banner.module.css';
import { NextPage } from 'next';

interface Props {
	title: string;
	description: string;
}

const Banner: NextPage<Props> = ({ title, description }) => {
	return (
		<section className={styles.container}>
			<div className={styles.text}>
				<header>
					<h1>{title}</h1>
				</header>
				<p>{description}</p>
			</div>
		</section>
	);
};

export default Banner;
