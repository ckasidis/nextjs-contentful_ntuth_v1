import { NextPage } from 'next';
import { IMember } from '../../@types/generated/contentful';
import Image from 'next/image';

interface Props {
	member: IMember;
}

const MemberCard: NextPage<Props> = ({ member }) => {
	const { fullname, nickname, status, programme, image } = member.fields;

	return (
		<div className="card container">
			<div className="image">
				<Image
					className="circle"
					src={'http:' + image.fields.file.url}
					width={image.fields.file.details.image!.width}
					height={image.fields.file.details.image!.height}
					alt={image.fields.title}
				/>
			</div>

			<div className="container">
				<h4>
					{fullname} ({nickname})
				</h4>
				<p>
					{status}, {programme}
				</p>
			</div>
			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1fr;
					gap: 1rem;
					text-align: center;
					max-width: 25em;
				}
				.image {
					width: 80%;
					margin-inline: auto;
				}
			`}</style>
		</div>
	);
};

export default MemberCard;
