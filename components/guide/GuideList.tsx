import { NextPage } from 'next';
import { IGuide } from '../../@types/generated/contentful';
import GuideCard from './GuideCard';

interface Props {
	guides: IGuide[];
}

const GuideList: NextPage<Props> = ({ guides }) => {
	return (
		<div>
			<div className="guide-list">
				{guides.map((guide) => (
					<GuideCard key={guide.fields.title} guide={guide} />
				))}
			</div>
			<style jsx>{`
				.guide-list {
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
					gap: 2rem;
					max-width: 70rem;
					margin-inline: auto;
				}
			`}</style>
		</div>
	);
};

export default GuideList;
