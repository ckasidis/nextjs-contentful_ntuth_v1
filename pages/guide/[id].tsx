import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import contentful from '../../lib/contentful';
import { IGuide } from '../../@types/generated/contentful';
import PageNotFound from '../404';
import BlogContainer from '../../components/common/BlogContainer';

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
			<Head>
				<title>{title}</title>
			</Head>
			<BlogContainer>
				<Link href="/guide">View all Guides</Link>
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
						className="rounded"
						src={'http:' + featuredImage.fields.file.url}
						width={featuredImage.fields.file.details.image!.width}
						height={featuredImage.fields.file.details.image!.height}
						alt={featuredImage.fields.title}
					/>
				</div>
				<div className="main-content">
					{documentToReactComponents(mainContent!)}
				</div>
			</BlogContainer>
		</main>
	);
};

export default SingleGuidePage;
