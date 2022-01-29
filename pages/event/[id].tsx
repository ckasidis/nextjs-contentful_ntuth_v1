import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import contentful from '../../lib/contentful';
import { IEvent } from '../../@types/generated/contentful';
import PageNotFound from '../404';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const res = await contentful.getEntries({
		content_type: 'event',
		'fields.slug': params!.id,
	});

	return {
		props: {
			event: res.items.length ? res.items[0] : null,
		},
	};
};

interface Props {
	event: IEvent | null;
}

const SingleEventPage: NextPage<Props> = ({ event }) => {
	if (!event) return <PageNotFound />;

	const { title, dateTime, featuredImage, mainContent, author } = event.fields;

	const dt = dateTime ? new Date(dateTime) : null;

	// const dayToString = (dayNo: number): string => {
	// 	switch (dayNo) {
	// 		case 0:
	// 			return 'Sunday';
	// 		case 1:
	// 			return 'Monday';
	// 		case 2:
	// 			return 'Tuesday';
	// 		case 3:
	// 			return 'Wednesday';
	// 		case 4:
	// 			return 'Thursday';
	// 		case 5:
	// 			return 'Friday';
	// 		case 6:
	// 			return 'Saturday';
	// 		default:
	// 			return '';
	// 	}
	// };

	return (
		<main className="main">
			<Head>
				<title>{title}</title>
			</Head>
			<div className="container">
				<div className="text-container">
					<Link href="/event">Back to Event</Link>
					<h1 className="title">{title}</h1>
					{dt && <h4>{`${dt.toString()}`}</h4>}
					<div className="author">
						{author.map((member) => (
							<p key={member.fields.fullname}>
								<FaUserAlt />
								<span> </span>
								{member.fields.fullname}
							</p>
						))}
					</div>
					<div className="featured-image">
						<Image
							src={'http:' + featuredImage.fields.file.url}
							width={featuredImage.fields.file.details.image!.width}
							height={featuredImage.fields.file.details.image!.height}
							alt={featuredImage.fields.title}
						/>
					</div>
					<div className="main-content">
						{documentToReactComponents(mainContent!)}
					</div>
				</div>
			</div>
			<style jsx>{`
				.main {
					min-height: inherit;
				}

				.container {
					max-width: 40em;
					margin-inline: auto;
					padding: 2rem;
				}

				.text-container {
					display: grid;
					grid-template-columns: 1fr;
					gap: 1rem;
					margin-inline: auto;
				}

				.featured-image {
					position: relative;
					z-index: 1;
				}
			`}</style>
		</main>
	);
};

export default SingleEventPage;