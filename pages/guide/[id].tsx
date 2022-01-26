import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { FaUserAlt } from 'react-icons/fa';
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

	return (
		<main className="main">
			<Card>
				<div className="container">
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
			</Card>
			<style jsx>{`
				.main {
					min-height: inherit;
				}

				.container {
					display: grid;
					grid-template-columns: 1fr;
					gap: 1rem;
					width: min(60vw, 40rem);
					margin-inline: auto;
				}

				.title,
				.author {
					justify-self: start;
				}

				.featured-image {
					position: relative;
					z-index: 1;
				}

				.main-content {
				}
			`}</style>
		</main>
	);
};

export default SingleGuidePage;
