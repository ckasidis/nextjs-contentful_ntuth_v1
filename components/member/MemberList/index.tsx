import { NextPage } from 'next';
import { IMember } from '../../../@types/generated/contentful';
import MemberCard from '../MemberCard';
import CardList from '../../common/CardList';

interface Props {
	members: IMember[];
}

const MemberList: NextPage<Props> = ({ members }) => {
	return (
		<div>
			<CardList>
				{members.map((member) => (
					<MemberCard member={member} key={member.fields.fullname} />
				))}
			</CardList>
		</div>
	);
};

export default MemberList;
