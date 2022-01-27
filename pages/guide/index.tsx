import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { IGuide } from '../../@types/generated/contentful';
import contentful from '../../lib/contentful';

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

const index: NextPage<Props> = ({ guides }) => {
	return (
		<main>
			<h1>Guide Page</h1>
			{guides.map((guide) => (
				<h2 key={guide.fields.title}>
					<Link href={`/guide/${guide.fields.slug}`}>{guide.fields.title}</Link>
				</h2>
			))}
		</main>
	);
};

export default index;
