import { memo } from "react";

import styles from "./ActionButtons.module.scss";

function ActionButtons({ onIncrement, onReset }) {
    console.log("ActionButtons is rendering...");
    return (
        <>
            <h2 className={styles.heading}>Actions Buttons</h2>
            <div className={styles.actions}>
                <button className={styles.btn} onClick={onIncrement}>
                    Increment
                </button>
                <button className={styles.btn} onClick={onReset}>
                    Reset
                </button>
            </div>
        </>
    );
}

export default memo(ActionButtons);
