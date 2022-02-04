import styles from '../styles/guide/GuideList.module.css';
import { NextPage } from 'next';
import { IGuide } from '../../@types/generated/contentful';
import GuideCard from './GuideCard';

interface Props {
	guides: IGuide[];
}

const GuideList: NextPage<Props> = ({ guides }) => {
	return (
		<div>
			<div className={styles.list}>
				{guides.map((guide) => (
					<GuideCard key={guide.fields.title} guide={guide} />
				))}
			</div>
		</div>
	);
};

export default GuideList;
