import styles from './MemberCard.module.css';
import { NextPage } from 'next';
import { IMember } from '../../../@types/generated/contentful';
import Image from 'next/image';

interface Props {
	member: IMember;
}

const MemberCard: NextPage<Props> = ({ member }) => {
	const { fullname, nickname, status, programme, image } = member.fields;

	return (
		<div className={`card ${styles.container}`}>
			<div className={styles.image}>
				<Image
					className="circle"
					src={'http:' + image.fields.file.url}
					width={image.fields.file.details.image!.width}
					height={image.fields.file.details.image!.height}
					alt={image.fields.title}
				/>
			</div>

			<h4>{`${fullname} (${nickname})`}</h4>
			<p>{`${status}, ${programme}`}</p>
		</div>
	);
};

export default MemberCard;
