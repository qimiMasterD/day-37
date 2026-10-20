import { useState } from "react";
import styles from "./Notification.module.scss";

import NotificationsList from "./components/NotificationsList";

function Notification() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div
                className={styles.icon}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(isOpen ^ 1);
                }}
            >
                <i className="fa-solid fa-bell"></i>
            </div>
            <NotificationsList
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            ></NotificationsList>
        </div>
    );
}

export default Notification;
