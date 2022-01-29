import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import contentful from '../../lib/contentful';
import { IEvent } from '../../@types/generated/contentful';
import EventCard from '../../components/event/EventCard';

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
		<main>
			<Head>
				<title>Events</title>
			</Head>
			{events.map((event) => (
				<EventCard key={event.fields.title} event={event} />
			))}
		</main>
	);
};

export default EventPage;
