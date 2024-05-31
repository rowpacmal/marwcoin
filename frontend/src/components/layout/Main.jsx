import { Outlet } from "react-router-dom";
import styles from "../../assets/styles/Main.module.css";

export const Main = () => {
    return (
        <main className={styles.main}>
            <Outlet />
        </main>
    );
};
