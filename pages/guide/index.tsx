import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import contentful from '../../lib/contentful';
import { IGuide } from '../../@types/generated/contentful';
import GuideList from '../../components/guide/GuideList';

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
		<main className="main">
			<Head>
				<title>Events</title>
			</Head>
			<GuideList guides={guides} />
			<style jsx>{`
				.main {
					min-height: inherit;
					padding: 2rem;
				}
			`}</style>
		</main>
	);
};

export default GuidePage;
