import { NextPage } from 'next';
import { IEvent } from '../../../@types/generated/contentful';
import EventCard from '../EventCard';
import CardList from '../../common/CardList';

interface Props {
	events: IEvent[];
}

const EventList: NextPage<Props> = ({ events }) => {
	return (
		<div>
			<CardList>
				{events.map((event) => (
					<EventCard key={event.fields.title} event={event} />
				))}
			</CardList>
		</div>
	);
};

export default EventList;
