import styles from "./Spinner.module.scss";

function Spinner() {
    return (
        <div className={styles.container}>
            <span class={styles.loader}></span>
            <span className={styles.text}>Loading...</span>
        </div>
    );
}

export default Spinner;
