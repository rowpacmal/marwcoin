import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<Link className={styles.link}>Community</Link>
					</li>

					<li className={styles.li}>
						<Link className={styles.link}>Privacy Policy</Link>
					</li>

					<li className={styles.li}>
						<Link className={styles.link}>Licenses</Link>
					</li>
				</ul>

				<div className={styles.copyright}>
					<p>&copy; 2024 Marw</p>
				</div>
			</div>
		</footer>
	);
};
