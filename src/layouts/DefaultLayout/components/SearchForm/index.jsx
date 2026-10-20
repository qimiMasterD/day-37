import { useState } from "react";

import SearchResult from "./components/SearchResult";

import styles from "./SearchForm.module.scss";

function SearchForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchResult, setSearchResult] = useState("");

    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
                className={styles.input}
                placeholder="Tìm khóa học, bài tập, hỏi đáp..."
                onChange={(e) => {
                    setSearchResult(e.target.value);
                }}
                onFocus={() => {
                    setIsOpen(true);
                }}
                onBlur={() => {
                    setIsOpen(false);
                }}
                type="text"
            />
            <SearchResult
                isOpen={isOpen}
                searchResult={searchResult}
            ></SearchResult>
        </div>
    );
}

export default SearchForm;
