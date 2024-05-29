import styles from '../assets/styles/About.module.css';

export const About = () => {
	return (
		<div className={styles.aboutContainer}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>About</h1>

				<p className={styles.description}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
					excepturi?
				</p>

				<p className={styles.breadText}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
					laboriosam a. Ipsum, consectetur esse voluptates exercitationem fugit
					laudantium omnis laboriosam?
				</p>
			</div>

			<img
				src="./src/assets/about-page.webp"
				alt="Graffiti on a wall"
				width="2408"
				height="1208"
				className={styles.aboutImage}
			/>
			
			<h1 className={styles.titleSmallScreen}>About</h1>
		</div>
	);
};
