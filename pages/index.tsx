import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { IEvent, IGuide } from '../@types/generated/contentful';
import EventList from '../components/event/EventList';
import GuideList from '../components/guide/GuideList';
import contentful from '../lib/contentful';

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
		<main className="main">
			<Head>
				<title>Home</title>
			</Head>
			<div className="list-section">
				<h2>Our Guides</h2>
				<GuideList guides={guides} />
			</div>
			<div className="list-section">
				<h2>Latest Events</h2>
				<EventList events={events} />
			</div>
			<style jsx>{`
				.main {
					min-height: inherit;
					padding: 2rem;
				}
				.list-section {
					display: grid;
					grid-template-columns: 1fr;
					gap: 2rem;
					padding: 2rem 0;
					text-align: center;
				}
			`}</style>
		</main>
	);
};

export default HomePage;
