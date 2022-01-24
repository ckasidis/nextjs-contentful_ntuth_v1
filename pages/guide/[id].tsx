import { GetServerSideProps, NextPage } from 'next';
import { createClient } from 'contentful';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID!,
		environment: process.env.CONTENTFUL_ENVIRONMENT_ID!,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
	});

	const res = await client.getEntries({
		content_type: 'guide',
		'fields.slug': params!.id,
	});

	return {
		props: {
			guide: res.items[0],
		},
	};
};

const SingleGuidePage: NextPage = ({ guide }: any) => {
	return <div>Single Guide Page{guide.fields.title}</div>;
};

export default SingleGuidePage;
