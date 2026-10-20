import { useEffect } from "react";

import styles from "./UserModal.module.scss";
import MenuList from "../MenuList";

const menuData = [
    [
        { id: "profile", label: "Trang cá nhân" },
        { id: "certificates", label: "Chứng chỉ của tôi" },
    ],
    [
        { id: "live-schedule", label: "Lịch live" },
        { id: "my-exercises", label: "Bài tập của tôi" },
    ],
    [
        { id: "write-blog", label: "Viết blog" },
        { id: "my-posts", label: "Bài viết của tôi" },
        { id: "saved-posts", label: "Bài viết đã lưu" },
    ],
    [
        { id: "settings", label: "Cài đặt" },
        { id: "logout", label: "Đăng xuất" },
    ],
];
function UserModal({ isOpen, setIsOpen, userData }) {
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
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <img src={userData.avatarUrl} alt="Avatar" />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>{userData.name}</div>
                    <div className={styles.username}>{userData.username}</div>
                </div>
            </div>
            <div className={styles.menus}>
                {menuData.map((element, index) => {
                    return <MenuList data={element} key={index}></MenuList>;
                })}
            </div>
        </div>
    );
}

export default UserModal;
