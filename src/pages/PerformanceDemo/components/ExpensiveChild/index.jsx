import { memo } from "react";

import styles from "./ExpensiveChild.module.scss";

function ExpensiveChild({ items }) {
    console.log("ExpensiveChild is rendering...");
    let total = 0;
    items.forEach((element) => {
        total += element?.length || 0;
    });

    return (
        <>
            <h3 className={styles.heading}>Total length is {total}</h3>
            <ul className={styles.list}>
                {items.map((element, index) => {
                    return (
                        <li className={styles.item} key={index}>
                            {element}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default memo(ExpensiveChild);
