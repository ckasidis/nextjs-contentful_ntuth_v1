import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IEvent } from '../../@types/generated/contentful';

interface Props {
	event: IEvent;
}

const EventCard: NextPage<Props> = ({ event }) => {
	const { title, slug, shortDescription, featuredImage } = event.fields;

	return (
		<Link href={`/event/${slug}`} passHref={true}>
			<div className="card container">
				<div className="image">
					<Image
						className="rounded"
						src={'http:' + featuredImage.fields.file.url}
						width={featuredImage.fields.file.details.image!.width}
						height={featuredImage.fields.file.details.image!.height}
						alt={featuredImage.fields.title}
					/>
				</div>
				<div className="container">
					<h4>{title}</h4>
					<p>{shortDescription}</p>
				</div>
				<style jsx>{`
					.container {
						display: grid;
						grid-template-columns: 1fr;
						gap: 1rem;
						text-align: center;
						max-width: 25em;
					}
					.image {
						width: 80%;
						margin-inline: auto;
					}
				`}</style>
			</div>
		</Link>
	);
};

export default EventCard;
