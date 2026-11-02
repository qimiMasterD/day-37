import { useState } from "react";

import styles from "./HOCDemo.module.scss";

import UserProfile from "../../components/UserProfile";
import ProductList from "../../components/ProductList";

function HOCDemo() {
    const [userLoading, setUserLoading] = useState(false);
    const [productLoading, setProductLoading] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <button
                    onClick={() => {
                        setUserLoading(!userLoading);
                    }}
                >
                    Toggle user
                </button>
                <UserProfile isLoading={userLoading} />
            </div>
            <div className={styles.col}>
                <button
                    onClick={() => {
                        setProductLoading(!productLoading);
                    }}
                >
                    Toggle product
                </button>
                <ProductList isLoading={productLoading} />
            </div>
        </div>
    );
}

export default HOCDemo;
