import styles from "./MenuList.module.scss";

function MenuList({ data }) {
    return (
        <ul className={styles.menu}>
            {data.map((element) => {
                return <li key={element.id}>{element.label}</li>;
            })}
        </ul>
    );
}

export default MenuList;
