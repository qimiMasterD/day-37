import { useEffect, useRef, useState } from "react";
import CustomInput from "../../components/CustomInput";

import styles from "./FocusDemo.module.scss";

function FocusDemo() {
    let cnt = useRef(0);
    const displayRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    useEffect(() => {
        cnt.current++;
        displayRef.current.textContent = cnt.current;
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>Focus Demo</div>
            <div className={styles.num}>
                Number of rerenders: <span ref={displayRef}>0</span>
            </div>

            <div className={styles.inputs}>
                <div className={styles.field}>
                    <div className={styles.name}>Account</div>
                    <CustomInput
                        label="Account name"
                        ref={inputRef1}
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                    />
                </div>
                <div className={styles.field}>
                    <div className={styles.name}>Password</div>
                    <CustomInput
                        label="Password"
                        ref={inputRef2}
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.btns}>
                <button onClick={() => inputRef1.current?.focus()}>
                    Focus Input 1
                </button>
                <button onClick={() => inputRef2.current?.focus()}>
                    Focus Input 2
                </button>
                <button
                    onClick={() => {
                        setInput1("");
                        setInput2("");
                    }}
                >
                    Clear Both
                </button>
                <button
                    onClick={() => {
                        alert(`Input 1 is: ${input1}\nInput 2 is: ${input2}`);
                    }}
                >
                    Get Values
                </button>
            </div>
        </div>
    );
}

export default FocusDemo;
