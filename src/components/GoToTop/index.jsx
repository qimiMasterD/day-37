import { useEffect, useRef, useState } from "react";

import styles from "./GoToTop.module.scss";
import clsx from "clsx";

function GoToTop() {
    const [rendering, setRendering] = useState(false);
    const [visible, setVisible] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const shouldAppear = window.scrollY >= 300;
            if (shouldAppear) {
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                    timerRef.current = null;
                }

                setRendering((prevRendering) => {
                    if (!prevRendering) {
                        setTimeout(() => {
                            setVisible(true);
                        }, 50);
                    }
                    return true;
                });
            } else {
                if (timerRef.current) return;
                setVisible(false);
                timerRef.current = setTimeout(() => {
                    setRendering(false);
                    timerRef.current = null;
                }, 300);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
            if (timerRef.current) clearTimeout(timerRef.current);
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
