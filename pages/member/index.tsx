import { GetServerSideProps, NextPage } from 'next';
import { IMember } from '../../@types/generated/contentful';
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
		<div>
			<h1>Member</h1>
			{members.map((member) => (
				<h2 key={member.fields.fullname}>{member.fields.fullname}</h2>
			))}
		</div>
	);
};

export default MemberPage;
