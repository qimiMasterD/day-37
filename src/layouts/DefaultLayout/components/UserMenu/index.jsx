import { useState } from "react";

import UserModal from "./components/UserModal";

import styles from "./UserMenu.module.scss";

import avatar from "../../../../assets/images/avatar.jpg";

const userData = {
    avatarUrl: avatar,
    name: "Ngô Trần Quang Minh",
    username: "@tranquangminhngo",
};
function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div
                className={styles.avatar}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(isOpen ^ 1);
                }}
            >
                <img src={avatar} alt="Avatar" />
            </div>
            <UserModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                userData={userData}
            ></UserModal>
        </div>
    );
}

export default UserMenu;
