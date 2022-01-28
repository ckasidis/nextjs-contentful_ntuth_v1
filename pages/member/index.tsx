import { GetServerSideProps, NextPage } from 'next';
import contentful from '../../lib/contentful';
import { IMember } from '../../@types/generated/contentful';
import MemberList from '../../components/member/MemberList';

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await contentful.getEntries({
		content_type: 'member',
	});

	return {
		props: {
			members: res.items,
		},
	};
};

interface Props {
	members: IMember[];
}

const MemberPage: NextPage<Props> = ({ members }) => {
	return (
		<main className="main">
			<MemberList members={members} />
			<style jsx>{`
				.main {
					min-height: inherit;
					padding: 2rem;
				}
			`}</style>
		</main>
	);
};

export default MemberPage;
