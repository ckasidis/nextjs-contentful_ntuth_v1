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

			<h4>{`${fullname} (${nickname})`}</h4>
			<p>{`${status}, ${programme}`}</p>

			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1fr;
					place-items: center;
					gap: 1rem;
					max-width: 25em;
					text-align: center;
				}

				.image {
					display: grid;
					place-items: center;
					width: 60%;
				}

				@media (min-width: 40em) {
					.image {
						min-height: 14rem;
					}
				}
			`}</style>
		</div>
	);
};

export default MemberCard;
