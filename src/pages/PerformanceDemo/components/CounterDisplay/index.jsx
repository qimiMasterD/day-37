import { memo } from "react";

import styles from "./CounterDisplay.module.scss";

function CounterDisplay({ count }) {
    console.log("CounterDisplay is rendering...");
    return <div className={styles.count}>Current Count is {count}</div>;
}

export default memo(CounterDisplay);
