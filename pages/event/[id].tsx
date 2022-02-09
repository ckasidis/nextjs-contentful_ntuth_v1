import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import contentful from '../../lib/contentful';
import { IEvent } from '../../@types/generated/contentful';
import PageNotFound from '../404';
import BlogContainer from '../../components/common/BlogContainer';

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

	return (
		<main>
			<Head>
				<title>{title}</title>
			</Head>
			<BlogContainer>
				<Link href="/event">View all Events</Link>
				<h1 className="title">{title}</h1>
				<div className="author">
					{author.map((member) => (
						<p key={member.fields.fullname}>
							<FaUserAlt />
							<span> </span>
							{member.fields.fullname}
						</p>
					))}
				</div>
				<div className="image-wrapper">
					<Image
						className="rounded featured-image"
						src={'http:' + featuredImage.fields.file.url}
						width={featuredImage.fields.file.details.image!.width}
						height={featuredImage.fields.file.details.image!.height}
						alt={featuredImage.fields.title}
					/>
				</div>
				{dt && (
					<h4>
						<em>{`Event Date: ${dt.toDateString()}`}</em>
						<br />
						<em>{`Event Time: ${dt.toTimeString()}`}</em>
					</h4>
				)}
				<div className="main-content">
					{documentToReactComponents(mainContent!)}
				</div>
			</BlogContainer>
		</main>
	);
};

export default SingleEventPage;
