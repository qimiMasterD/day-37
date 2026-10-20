import PropTypes from "prop-types";

import styles from "./Modal.module.scss";

function Modal({ isOpen, children }) {
    if (!isOpen) return null;
    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <div className={styles.content}>{children}</div>
                </div>
            </div>
        </div>
    );
}

Modal.PropTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node,
};

export default Modal;
