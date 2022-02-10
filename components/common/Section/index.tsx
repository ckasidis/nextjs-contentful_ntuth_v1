import styles from './Section.module.css';
import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
	title: string;
	link?: {
		path: string;
		text: string;
	};
}

const Section: NextPage<Props> = ({ title, link, children }) => {
	return (
		<div className={styles.section}>
			<header>
				<h2>{title}</h2>
				{link && <Link href={link.path}>{link.text}</Link>}
			</header>
			{children}
		</div>
	);
};

export default Section;
