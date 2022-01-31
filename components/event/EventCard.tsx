import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IEvent } from '../../@types/generated/contentful';

interface Props {
	event: IEvent;
}

const EventCard: NextPage<Props> = ({ event }) => {
	const { title, slug, shortDescription, featuredImage } = event.fields;

	return (
		<>
			<Link href={`/event/${slug}`} passHref={true}>
				<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
						<h4>{title}</h4>
						<p>{shortDescription}</p>
					</div>
				</motion.div>
			</Link>
			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1fr;
					place-items: center;
					gap: 1rem;
					max-width: 25em;
				}
				.image {
					width: 80%;
				}
			`}</style>
		</>
	);
};

export default EventCard;
