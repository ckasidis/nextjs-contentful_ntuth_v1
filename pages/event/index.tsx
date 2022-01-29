import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import contentful from '../../lib/contentful';
import { IEvent } from '../../@types/generated/contentful';
import EventList from '../../components/event/EventList';

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await contentful.getEntries({
		content_type: 'event',
	});
	return {
		props: { events: res.items },
	};
};

interface Props {
	events: IEvent[];
}

const EventPage: NextPage<Props> = ({ events }) => {
	return (
		<main className="main">
			<Head>
				<title>Events</title>
			</Head>
			<EventList events={events} />
			<style jsx>{`
				.main {
					min-height: inherit;
					padding: 2rem;
				}
			`}</style>
		</main>
	);
};

export default EventPage;
