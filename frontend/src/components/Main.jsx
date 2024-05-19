import { Outlet } from 'react-router-dom';
import styles from './Main.module.css';

export const Main = () => {
	return (
		<main className={styles.main}>
			<Outlet />
		</main>
	);
};
