import styles from "./NotificationItem.module.scss";

function NotificationItem({ data }) {
    return (
        <div className={styles.item}>
            <img className={styles.avatar} src={data.imageUrl} alt="avatar" />

            <div className={styles.content}>
                <div className={styles.text}>
                    <span className={styles.name}>{data.title}</span>{" "}
                    {data.action}
                </div>
                <div className={styles.time}>{data.time} trước</div>
            </div>
        </div>
    );
}

export default NotificationItem;
