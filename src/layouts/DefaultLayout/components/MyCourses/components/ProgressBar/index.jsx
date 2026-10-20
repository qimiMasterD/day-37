import styles from "./ProgressBar.module.scss";

function ProgressBar({ progress }) {
    return (
        <div className={styles.track}>
            <div
                className={styles.fill}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}

export default ProgressBar;
