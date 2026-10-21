import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Modal.module.scss";

function Modal({
    isOpen = false,
    onAfterOpen = () => {},
    onAfterClose = () => {},
    onRequestClose = () => {},
    closeTimeoutMS = 0,
    overlayClassName,
    className,
    bodyOpenClassName,
    htmlOpenClassName,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEsc = true,
    children,
}) {
    const [isClosing, setIsClosing] = useState(false);

    // handle close function
    const handleClose = useCallback(() => {
        setIsClosing(true);

        const closeFunction = () => {
            onAfterClose();
            onRequestClose();
            setIsClosing(false);
        };
        if (closeTimeoutMS === 0) closeFunction();
        else setTimeout(closeFunction, closeTimeoutMS);
    }, [closeTimeoutMS, onRequestClose, onAfterClose]);

    // handle close on ESC
    useEffect(() => {
        if (!shouldCloseOnEsc || !isOpen) return;

        const handleCloseOnEsc = (e) => {
            if (e.key != "Escape") return;
            handleClose();
        };
        document.addEventListener("keydown", handleCloseOnEsc);
        return () => {
            document.removeEventListener("keydown", handleCloseOnEsc);
        };
    }, [handleClose, shouldCloseOnEsc, isOpen]);

    // adding classnames to body and html element
    useEffect(() => {
        document
            .querySelector("body")
            .classList.toggle(bodyOpenClassName, isOpen);
        document
            .querySelector("html")
            .classList.toggle(htmlOpenClassName, isOpen);
        return () => {
            document
                .querySelector("body")
                .classList.remove(bodyOpenClassName, isOpen);
            document
                .querySelector("html")
                .classList.remove(htmlOpenClassName, isOpen);
        };
    }, [bodyOpenClassName, htmlOpenClassName, isOpen]);

    // function that is called when modal is open
    useEffect(() => {
        if (isOpen) onAfterOpen();
    }, [isOpen, onAfterOpen]);

    if (!isOpen) return null;
    return (
        <div
            className={styles.container}
            style={{ "--close-timeout": `${closeTimeoutMS}ms` }}
        >
            <div
                className={clsx(
                    styles.overlay,
                    overlayClassName,
                    isClosing && styles.isClosing,
                )}
                onClick={(e) => {
                    if (!shouldCloseOnOverlayClick) return;
                    if (
                        e.target !==
                        document.querySelector(`.${styles.overlay}`)
                    )
                        return;
                    handleClose();
                }}
            >
                <div
                    className={clsx(
                        styles.modal,
                        className,
                        isClosing && styles.isClosing,
                    )}
                >
                    <div className={styles.content}>{children}</div>
                    <div className={styles.actions}>
                        <button
                            className={styles["close-btn"]}
                            onClick={handleClose}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
};

export default Modal;
