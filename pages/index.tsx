import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import contentful from '../lib/contentful';
import { IEvent, IGuide } from '../@types/generated/contentful';
import EventList from '../components/event/EventList';
import GuideList from '../components/guide/GuideList';
import Section from '../components/common/Section';
import Banner from '../components/common/Banner';

export const getServerSideProps: GetServerSideProps = async () => {
	const guideRes = await contentful.getEntries({
		content_type: 'guide',
		order: '-sys.createdAt',
		limit: 2,
	});

	const eventRes = await contentful.getEntries({
		content_type: 'event',
		order: '-sys.createdAt',
		limit: 2,
	});

	return {
		props: {
			guides: guideRes.items,
			events: eventRes.items,
		},
	};
};

interface Props {
	guides: IGuide[];
	events: IEvent[];
}

const HomePage: NextPage<Props> = ({ guides, events }) => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Banner title="Hello!" description="Welcome to NTU Thai Society" />
			<div className="sections-container">
				<Section
					title="Our Guides"
					link={{ path: '/guide', text: 'View all Guides' }}
				>
					<GuideList guides={guides} />
				</Section>
				<Section
					title="Latest Events"
					link={{ path: '/event', text: 'View all Events' }}
				>
					<EventList events={events} />
				</Section>
			</div>
		</>
	);
};

export default HomePage;
