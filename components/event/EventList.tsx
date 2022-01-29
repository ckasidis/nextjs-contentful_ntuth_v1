import { NextPage } from 'next';
import { IEvent } from '../../@types/generated/contentful';
import EventCard from './EventCard';

interface Props {
	events: IEvent[];
}

const EventList: NextPage<Props> = ({ events }) => {
	return (
		<div>
			<div className="event-list">
				{events.map((event) => (
					<EventCard key={event.fields.title} event={event} />
				))}
			</div>
			<style jsx>{`
				.event-list {
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

export default EventList;
