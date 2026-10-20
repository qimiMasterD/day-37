import { useEffect } from "react";

import styles from "./NotificationsList.module.scss";

import NotificationItem from "../NotificationItem";

import VuQuocDung from "../../../../../../assets/images/VuQuocDung.png";

const Notifications = [
    {
        imageUrl: VuQuocDung,
        title: "Vũ Quốc Dũng đã nhắc tới bạn trong một bình luận",
        time: "3 ngày",
    },
    {
        imageUrl: VuQuocDung,
        title: "Vũ Quốc Dũng đã nhắc tới bạn trong một bình luận",
        time: "10 ngày",
    },
    {
        imageUrl: VuQuocDung,
        title: "Vũ Quốc Dũng đã nhắc tới bạn trong một bình luận",
        time: "21 ngày",
    },
    {
        imageUrl: VuQuocDung,
        title: "Vũ Quốc Dũng đã nhắc tới bạn trong một bình luận",
        time: "1 tháng",
    },
];

function NotificationsList({ isOpen, setIsOpen }) {
    useEffect(() => {
        if (!isOpen) return;
        const handleClose = (e) => {
            if (e.target.closest(`.${styles.container}`)) return;
            setIsOpen(false);
        };
        document.addEventListener("click", handleClose);
        return () => {
            document.removeEventListener("click", handleClose);
        };
    }, [isOpen, setIsOpen]);
    if (!isOpen) return null;
    return (
        <div className={styles.container}>
            <h4>Thông báo</h4>
            <div className={styles["notifications-list"]}>
                {Notifications.map((element, index) => {
                    return (
                        <NotificationItem
                            data={element}
                            key={index}
                        ></NotificationItem>
                    );
                })}
            </div>
        </div>
    );
}

export default NotificationsList;
