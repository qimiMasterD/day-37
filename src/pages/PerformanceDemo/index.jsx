import { useCallback, useState } from "react";

import styles from "./PerformanceDemo.module.scss";

import CounterDisplay from "./components/CounterDisplay";
import ActionButtons from "./components/ActionButtons";
import ExpensiveChild from "./components/ExpensiveChild";

const itemsList = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const names = ["Nguyen Van A", "Tran Van B", "Nguyen Thi C"];
function getRandomInt(l, r) {
    return Math.floor(Math.random() * (r - l + 1)) + l;
}

function PerformanceDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Nguyen Van A");
    const [items, setItems] = useState([]);

    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []);

    const handleRename = useCallback(() => {
        setName(names[getRandomInt(0, 2)]);
    }, []);

    const handleAdd = useCallback(() => {
        setItems((prevItems) => {
            let newItems = [...prevItems];
            newItems.push(itemsList[getRandomInt(0, 4)]);
            return newItems;
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.displayName}>Current name is {name}</div>

            <CounterDisplay count={count} />
            <ActionButtons
                onIncrement={handleIncrement}
                onReset={handleReset}
            />

            <div className={styles.btnContainer}>
                <button className={styles.btn} onClick={handleIncrement}>
                    Increment Count
                </button>
                <button className={styles.btn} onClick={handleRename}>
                    Change Name
                </button>
                <button className={styles.btn} onClick={handleAdd}>
                    Add Item
                </button>
            </div>
            <ExpensiveChild items={items} />
        </div>
    );
}

export default PerformanceDemo;
