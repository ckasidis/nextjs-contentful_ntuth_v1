import { NextPage } from 'next';
import Head from 'next/head';

const AboutPage: NextPage = () => {
	return (
		<main className="main">
			<Head>
				<title>About</title>
			</Head>
			<h1>เกี่ยวกับเรา</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
				numquam ullam distinctio repudiandae? Sed dolore totam quaerat ipsum
				vel? Adipisci alias ipsa, facere similique consequatur reiciendis
				debitis error odit eligendi? Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Officia cumque accusantium tenetur voluptate beatae
				repudiandae magnam distinctio corrupti excepturi nobis quisquam officiis
				ullam, inventore enim, facere totam ipsa necessitatibus eaque. Lorem
				ipsum dolor sit amet consectetur, adipisicing elit. Pariatur esse
				aspernatur aut molestiae, quidem unde dolores atque sit consectetur
				voluptatum distinctio quas adipisci autem ratione magni rem officia
				cupiditate at. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Unde nemo nesciunt similique qui quidem sint! Iste, eveniet velit
				laboriosam id, temporibus nulla architecto ipsum quos doloribus vitae
				omnis voluptate dignissimos? Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Eveniet, est ea? Sequi, nam pariatur quasi, soluta ad,
				rerum eius cumque fugit quia explicabo quidem voluptas illum? Non
				voluptates libero mollitia! Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. At, facere! Molestiae atque esse officia velit ab
				officiis nemo, laborum nisi doloribus beatae cum aspernatur sint ipsa
				voluptate molestias recusandae maiores. Lorem ipsum, dolor sit amet
				consectetur adipisicing elit. Quos nobis, totam dolores praesentium eius
				placeat laudantium recusandae autem accusamus reprehenderit magni quidem
				deserunt ex, illum ad hic tempore quasi adipisci? Lorem ipsum dolor sit,
				amet consectetur adipisicing elit. Minima rerum aspernatur asperiores
				est voluptatem dolor adipisci laudantium ut voluptatibus libero, culpa
				consequuntur, sunt excepturi unde maiores officia mollitia quia
				quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
				quaerat vel ipsa deleniti exercitationem doloribus similique nobis.
				Necessitatibus blanditiis voluptate commodi, iure a esse, tenetur neque
				quod sapiente saepe itaque.
			</p>
			<style jsx>{`
				.main {
					min-width: inherit;
				}
			`}</style>
		</main>
	);
};

export default AboutPage;
