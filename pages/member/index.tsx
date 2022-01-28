import { GetServerSideProps, NextPage } from 'next';
import { IMember } from '../../@types/generated/contentful';
import MemberCard from '../../components/member/MemberCard';
import contentful from '../../lib/contentful';

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
			<h1>Member</h1>
			{members.map((member) => (
				<MemberCard member={member} key={member.fields.fullname} />
			))}
			<style jsx>{`
				.container {
				}
			`}</style>
		</main>
	);
};

export default MemberPage;
