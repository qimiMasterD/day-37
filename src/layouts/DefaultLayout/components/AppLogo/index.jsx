import { useNavigate } from "react-router";
import imagePath from "../../../../assets/images/f8-logo.png";

import styles from "./AppLogo.module.scss";

function AppLogo() {
    const navigate = useNavigate();
    return (
        <div className={styles["logo-container"]}>
            <img
                src={imagePath}
                alt="F8 Logo"
                className={styles["logo-img"]}
                onClick={() => {
                    navigate("/");
                }}
            />
            <span className={styles["logo-text"]}>Học Lập Trình Để Đi Làm</span>
        </div>
    );
}

export default AppLogo;
