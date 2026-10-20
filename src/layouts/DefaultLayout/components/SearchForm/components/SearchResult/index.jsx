import styles from "./SearchResult.module.scss";

import SearchItem from "../SearchItem";

// images
import JSBasic from "../../../../../../assets/images/js-basic.png";
import JSAdvanced from "../../../../../../assets/images/js-advanced.png";
import JSPro from "../../../../../../assets/images/js-pro.png";
import ShouldNotLearnJS from "../../../../../../assets/images/should-not-learn-js.jpg";
import AsyncJSSection1 from "../../../../../../assets/images/async-js-section-1.png";
import EqualityJSComparison from "../../../../../../assets/images/equality-js-comparison.jpg";
import AbsurdCasesJS from "../../../../../../assets/images/absurd-cases-js.jpg";
import FinishedJSCodeChallenge from "../../../../../../assets/images/finished-js-code-challenge.jpg";

// fake data
const CourseData = [
    {
        imageUrl: JSBasic,
        name: "Lập Trình JavaScript Cơ Bản",
        type: "Khóa học",
        status: "Đang mở",
    },
    {
        imageUrl: JSAdvanced,
        name: "Lập Trình JavaScript Nâng Cao",
        type: "Khóa học",
        status: "Đang mở",
    },
    {
        imageUrl: JSPro,
        name: "JavaScript Pro",
        type: "Khóa học Pro",
        status: "Đang mở",
    },
];

const PostData = [
    {
        imageUrl: ShouldNotLearnJS,
        name: "Không Nên Học Javascript, Liệu Có Đúng Như Vậy?",
        type: "5 phút đọc",
        status: "Bài viết",
    },
    {
        imageUrl: AsyncJSSection1,
        name: "Xử Lý Bất Đồng Bộ Trong Javascript - Phần 1",
        type: "8 phút đọc",
        status: "Bài viết",
    },
    {
        imageUrl: EqualityJSComparison,
        name: "Chuyện cũ xưa: Nên dùng === hay == để so sánh trong Javascript?",
        type: "3 phút đọc",
        status: "Bài viết",
    },
];

const VideoData = [
    {
        imageUrl: AbsurdCasesJS,
        name: 'Giải thích các trường hợp "phi lý" trong JavaScript?',
        type: "19.444 lượt xem",
        status: "Video",
    },
    {
        imageUrl: FinishedJSCodeChallenge,
        name: '"Học Xong" Javascript Có Giải Được "Code Thiếu Nhi"?',
        type: "69.755 lượt xem",
        status: "Video",
    },
];

function SearchResult({ isOpen, searchResult }) {
    if (!isOpen) return null;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <div className={styles["result-for"]}>
                    Kết quả cho "{searchResult}"
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.section}>
                    <div className={styles.title}>
                        <h3>Khóa học phù hợp</h3>
                        <button className={styles["see-more"]}>Xem thêm</button>
                    </div>
                    <div className={styles.items}>
                        {CourseData.map((element, idx) => {
                            return (
                                <SearchItem
                                    key={idx}
                                    data={element}
                                ></SearchItem>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.title}>
                        <h3>Bài viết</h3>
                        <button className={styles["see-more"]}>Xem thêm</button>
                    </div>
                    <div className={styles.items}>
                        {PostData.map((element, idx) => {
                            return (
                                <SearchItem
                                    key={idx}
                                    data={element}
                                ></SearchItem>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.title}>
                        <h3>Video</h3>
                        <button className={styles["see-more"]}>Xem thêm</button>
                    </div>
                    <div className={styles.items}>
                        {VideoData.map((element, idx) => {
                            return (
                                <SearchItem
                                    key={idx}
                                    data={element}
                                ></SearchItem>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
