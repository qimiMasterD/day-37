import styles from "./Home.module.scss";

function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Khóa học lập trình</h1>
            <p className={styles.description}>Chọn khóa học để bắt đầu.</p>
        </main>
    );
}

export default Home;
