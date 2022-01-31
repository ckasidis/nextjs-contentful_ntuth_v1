import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IGuide } from '../../@types/generated/contentful';

interface Props {
	guide: IGuide;
}

const GuideCard: NextPage<Props> = ({ guide }) => {
	const { title, slug, shortDescription, featuredImage } = guide.fields;

	return (
		<>
			<Link href={`/guide/${slug}`} passHref={true}>
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
						<div className="container">
							<h4>{title}</h4>
							<p>{shortDescription}</p>
						</div>
					</div>
				</motion.div>
			</Link>
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
		</>
	);
};

export default GuideCard;
