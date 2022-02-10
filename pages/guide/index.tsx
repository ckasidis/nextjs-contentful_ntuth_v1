import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import contentful from '../../lib/contentful';
import { IGuide } from '../../@types/generated/contentful';
import GuideList from '../../components/guide/GuideList';
import Section from '../../components/common/Section';

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
		<>
			<Head>
				<title>Guides</title>
			</Head>
			<div className="sections-container">
				<Section title="All Guides">
					<GuideList guides={guides} />
				</Section>
			</div>
		</>
	);
};

export default GuidePage;
