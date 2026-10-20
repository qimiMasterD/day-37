import styles from "./Header.module.scss";

import AppLogo from "../../components/AppLogo";
import SearchForm from "../../components/SearchForm";
import MyCourses from "../../components/MyCourses";
import Notification from "../../components/Notification";
import UserMenu from "../../components/UserMenu";

function Header() {
    return (
        <header className={styles.container}>
            <AppLogo></AppLogo>
            <SearchForm></SearchForm>
            <div className={styles.user}>
                <MyCourses></MyCourses>
                <Notification></Notification>
                <UserMenu></UserMenu>
            </div>
        </header>
    );
}

export default Header;
