import styles from './GuideList.module.css';
import { NextPage } from 'next';
import { IGuide } from '../../../@types/generated/contentful';
import GuideCard from '../GuideCard';
import CardList from '../../common/CardList';

interface Props {
	guides: IGuide[];
}

const GuideList: NextPage<Props> = ({ guides }) => {
	return (
		<div>
			<CardList>
				{guides.map((guide) => (
					<GuideCard key={guide.fields.title} guide={guide} />
				))}
			</CardList>
		</div>
	);
};

export default GuideList;
