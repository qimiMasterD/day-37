import { useEffect, useRef, useState } from "react";

import styles from "./GoToTop.module.scss";
import clsx from "clsx";

function GoToTop() {
    const [rendering, setRendering] = useState(false);
    const [visible, setVisible] = useState(false);
    const timerRef = useRef(null);
    const showTimerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const shouldAppear = window.scrollY >= 300;
            if (shouldAppear) {
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                    timerRef.current = null;
                }

                setRendering(true);

                if (!showTimerRef.current) {
                    showTimerRef.current = setTimeout(() => {
                        setVisible(true);
                        showTimerRef.current = null;
                    }, 50);
                }
            } else {
                if (timerRef.current) return;

                setVisible(false);

                if (showTimerRef.current) {
                    clearTimeout(showTimerRef.current);
                    showTimerRef.current = null;
                }

                timerRef.current = setTimeout(() => {
                    setRendering(false);
                    timerRef.current = null;
                }, 300);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timerRef.current) clearTimeout(timerRef.current);
            if (showTimerRef.current) clearTimeout(showTimerRef.current);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!rendering) return null;
    return (
        <button
            className={clsx(styles.btn, visible ? styles.visible : "")}
            onClick={scrollToTop}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
}

export default GoToTop;
