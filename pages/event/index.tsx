import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import contentful from '../../lib/contentful';
import { IEvent } from '../../@types/generated/contentful';
import EventList from '../../components/event/EventList';
import Section from '../../components/common/Section';

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
		<>
			<Head>
				<title>Events</title>
			</Head>
			<div className="sections-container">
				<Section title="All Events">
					<EventList events={events} />
				</Section>
			</div>
		</>
	);
};

export default EventPage;
