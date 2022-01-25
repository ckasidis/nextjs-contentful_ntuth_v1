import { GetServerSideProps, NextPage } from 'next';
import contentful from '../../lib/contentful';
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

const SingleGuidePage: NextPage = ({ guide }: any) => {
	if (!guide) return <PageNotFound />;
	return <div>Single Guide Page{guide.fields.title}</div>;
};

export default SingleGuidePage;
