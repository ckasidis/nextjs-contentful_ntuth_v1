import { GetServerSideProps, NextPage } from 'next';
import contentful from '../../lib/contentful';
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
	return <div>Single Guide Page{guide.fields.title}</div>;
};

export default SingleGuidePage;
