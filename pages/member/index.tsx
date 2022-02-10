import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import contentful from '../../lib/contentful';
import { IMember } from '../../@types/generated/contentful';
import MemberList from '../../components/member/MemberList';
import Section from '../../components/common/Section';

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
		<>
			<Head>
				<title>Members</title>
			</Head>
			<div className="sections-container">
				<Section title="Our Members">
					<MemberList members={members} />
				</Section>
			</div>
		</>
	);
};

export default MemberPage;
