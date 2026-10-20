import styles from "./CourseItem.module.scss";

import ProgressBar from "../ProgressBar";

function CourseItem({ data }) {
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img src={data.imageUrl} alt={data.title} />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.last}>
                    Học cách đây {data.lastStudied} trước
                </div>
                <ProgressBar progress={data.progress}></ProgressBar>
            </div>
        </div>
    );
}

export default CourseItem;
