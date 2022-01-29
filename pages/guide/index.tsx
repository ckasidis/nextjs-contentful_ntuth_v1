import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import contentful from '../../lib/contentful';
import { IGuide } from '../../@types/generated/contentful';

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await contentful.getEntries({
		content_type: 'guide',
	});
	return {
		props: { guides: res.items },
	};
};

interface Props {
	guides: IGuide[];
}

const GuidePage: NextPage<Props> = ({ guides }) => {
	return (
		<main>
			<Head>
				<title>Guides</title>
			</Head>
			<h1>Guide Page</h1>
			{guides.map((guide) => (
				<h2 key={guide.fields.title}>
					<Link href={`/guide/${guide.fields.slug}`}>{guide.fields.title}</Link>
				</h2>
			))}
		</main>
	);
};

export default GuidePage;
