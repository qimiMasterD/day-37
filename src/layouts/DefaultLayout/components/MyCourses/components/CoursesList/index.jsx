import { useEffect } from "react";

import styles from "./CoursesList.module.scss";

import CourseItem from "../CourseItem";

import Fullstack from "../../../../../../assets/images/fullstack.png";
import HtmlCssPro from "../../../../../../assets/images/htmlcsspro.png";
import JavaScriptPro from "../../../../../../assets/images/JavaScriptPro.png";

const CoursesData = [
    {
        imageUrl: Fullstack,
        title: "Fullstack Web",
        lastStudied: "7 ngày",
        progress: 94,
    },
    {
        imageUrl: HtmlCssPro,
        title: "HTML CSS Pro",
        lastStudied: "2 ngày",
        progress: 45,
    },
    {
        imageUrl: JavaScriptPro,
        title: "JavaScript Pro",
        lastStudied: "12 giờ",
        progress: 15,
    },
];
function CoursesList({ isOpen, setIsOpen }) {
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
                <div className={styles.title}>Khóa học của tôi</div>
                <button className={styles["see-all"]}>Xem tất cả</button>
            </div>
            <div className={styles["courses-list"]}>
                {CoursesData.map((element, index) => {
                    return <CourseItem data={element} key={index}></CourseItem>;
                })}
            </div>
        </div>
    );
}

export default CoursesList;
