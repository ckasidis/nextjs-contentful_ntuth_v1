import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import contentful from '../../lib/contentful';
import { IEvent } from '../../@types/generated/contentful';

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
			<h1>Event Page</h1>
			{events.map((event) => (
				<h2 key={event.fields.title}>
					<Link href={`/guide/${event.fields.slug}`}>{event.fields.title}</Link>
				</h2>
			))}
		</main>
	);
};

export default EventPage;
