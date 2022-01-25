import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import contentful from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { IGuide } from '../../@types/generated/contentful';
import PageNotFound from '../404';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const res = await contentful.getEntries({
		content_type: 'guide',
		'fields.slug': params!.id,
	});

	return {
		props: {
			guide: res.items.length ? res.items[0] : null,
		},
	};
};

interface Props {
	guide: IGuide | null;
}

const SingleGuidePage: NextPage<Props> = ({ guide }) => {
	if (!guide) return <PageNotFound />;

	const { title, featuredImage, mainContent, author } = guide.fields;
	console.log(guide);

	return (
		<main className="main">
			<h1 className="title">{title}</h1>
			<div className="author">
				{author.map((member) => (
					<h3 key={member.fields.fullname}>{member.fields.fullname}</h3>
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
			<style jsx>{`
				.main {
					min-height: inherit;
				}

				.featured-image {
					width: clamp(20rem, 60vw, 40rem);
				}
			`}</style>
		</main>
	);
};

export default SingleGuidePage;
