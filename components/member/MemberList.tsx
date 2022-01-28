import { NextPage } from 'next';
import { IMember } from '../../@types/generated/contentful';
import MemberCard from './MemberCard';

interface Props {
	members: IMember[];
}

const MemberList: NextPage<Props> = ({ members }) => {
	return (
		<div>
			<div className="member-list">
				{members.map((member) => (
					<MemberCard member={member} key={member.fields.fullname} />
				))}
			</div>
			<style jsx>{`
				.member-list {
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
					gap: 2rem;
					max-width: 70rem;
					margin-inline: auto;
				}
			`}</style>
		</div>
	);
};

export default MemberList;
