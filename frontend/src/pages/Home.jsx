import styles from "../assets/styles/Home.module.css";
import HomePageWebp from "../assets/home-page.webp";

export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.titleSmallScreen}>MARW</h1>

            <img
                src={HomePageWebp}
                alt="Graffiti on a wall"
                width="2408"
                height="1208"
                className={styles.homeImage}
            />

            <div className={styles.textContainer}>
                <h1 className={styles.title}>MARW</h1>

                <p className={styles.description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum, excepturi?
                </p>

                <p className={styles.breadText}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere, laboriosam a. Ipsum, consectetur esse voluptates
                    exercitationem fugit laudantium omnis laboriosam?
                </p>
            </div>
        </div>
    );
};
