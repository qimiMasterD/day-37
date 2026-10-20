import styles from "./SearchItem.module.scss";

function SearchItem({ data }) {
    return (
        <div className={styles.item}>
            <div className={styles["item-img"]}>
                <img src={data.imageUrl} alt={data.name} />
            </div>
            <div className={styles["item-content"]}>
                <div className={styles.name}>{data.name}</div>
                <div className={styles.type}>{data.type}</div>
            </div>
            <div className={styles.status}>{data.status}</div>
        </div>
    );
}

export default SearchItem;
