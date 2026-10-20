import { useState } from "react";
import styles from "./MyCourses.module.scss";

import CoursesList from "./components/CoursesList";

function MyCourses() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div
                className={styles.title}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(isOpen ^ 1);
                }}
            >
                Khóa học của tôi
            </div>
            <CoursesList isOpen={isOpen} setIsOpen={setIsOpen}></CoursesList>
        </div>
    );
}

export default MyCourses;
