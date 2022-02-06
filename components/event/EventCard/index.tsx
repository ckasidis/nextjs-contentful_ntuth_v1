import styles from './EventCard.module.css';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IEvent } from '../../../@types/generated/contentful';

interface Props {
	event: IEvent;
}

const EventCard: NextPage<Props> = ({ event }) => {
	const { title, slug, shortDescription, featuredImage } = event.fields;

	return (
		<>
			<Link href={`/event/${slug}`} passHref={true}>
				<motion.div
					className={`card ${styles.container}`}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<div className={styles.image}>
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
				</motion.div>
			</Link>
		</>
	);
};

export default EventCard;
