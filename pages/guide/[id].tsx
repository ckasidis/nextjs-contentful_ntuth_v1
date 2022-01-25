import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import contentful from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { IGuide } from '../../@types/generated/contentful';
import PageNotFound from '../404';
import Card from '../../components/common/Card';

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
			<Card>
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
			</Card>
			<style jsx>{`
				.main {
					min-height: inherit;
				}

				.featured-image {
					position: relative;
					z-index: 1;
					width: clamp(15rem, 60vw, 45rem);
					margin: 3rem auto;
				}

				.main-content {
					width: clamp(15rem, 60vw, 75ch);
				}
			`}</style>
		</main>
	);
};

export default SingleGuidePage;
