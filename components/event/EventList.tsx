import styles from '../styles/event/EventList.module.css';
import { NextPage } from 'next';
import { IEvent } from '../../@types/generated/contentful';
import EventCard from './EventCard';

interface Props {
	events: IEvent[];
}

const EventList: NextPage<Props> = ({ events }) => {
	return (
		<div>
			<div className={styles.list}>
				{events.map((event) => (
					<EventCard key={event.fields.title} event={event} />
				))}
			</div>
		</div>
	);
};

export default EventList;
