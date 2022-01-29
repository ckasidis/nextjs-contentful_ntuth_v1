import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import contentful from '../../lib/contentful';
import { IGuide } from '../../@types/generated/contentful';
import GuideCard from '../../components/guide/GuideCard';

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
			{guides.map((guide) => (
				<GuideCard key={guide.fields.title} guide={guide} />
			))}
		</main>
	);
};

export default GuidePage;
