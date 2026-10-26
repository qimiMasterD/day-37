import { memo, useMemo } from "react";

import styles from "./ExpensiveChild.module.scss";

function ExpensiveChild({ items }) {
    console.log("ExpensiveChild is rendering...");
    let total = 0;
    items.forEach((element) => {
        total += element?.length || 0;
    });

    // Tính toán nặng: tìm item có tên dài nhất
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating longest name...");
        let longest = "";
        items.forEach((item) => {
            // Thêm delay giả lập tính toán nặng
            for (let i = 0; i < 100000; i++) {}
            if (item.length > longest.length) {
                longest = item;
            }
        });
        return longest;
    }, [items]);

    return (
        <>
            <h3 className={styles.heading}>Total length is {total}</h3>
            <p>Longest name: {expensiveCalculation}</p>
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
