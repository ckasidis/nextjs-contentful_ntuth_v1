import styles from '../styles/member/MemberList.module.css';
import { NextPage } from 'next';
import { IMember } from '../../@types/generated/contentful';
import MemberCard from './MemberCard';

interface Props {
	members: IMember[];
}

const MemberList: NextPage<Props> = ({ members }) => {
	return (
		<div>
			<div className={styles.list}>
				{members.map((member) => (
					<MemberCard member={member} key={member.fields.fullname} />
				))}
			</div>
		</div>
	);
};

export default MemberList;
