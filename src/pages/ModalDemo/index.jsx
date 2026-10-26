import { useState } from "react";
import styles from "./ModalDemo.module.scss";
import Modal from "../../components/Modal";

function ModalDemo() {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalName) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Modal Demos</h1>

            <div className={styles.buttonGroup}>
                <button
                    className={styles.demoBtn}
                    onClick={() => openModal("basic")}
                >
                    1. Basic Modal
                </button>
                <button
                    className={styles.demoBtn}
                    onClick={() => openModal("animation")}
                >
                    2. Modal với Animation
                </button>
                <button
                    className={styles.demoBtn}
                    onClick={() => openModal("noOverlay")}
                >
                    3. Modal không đóng khi click overlay
                </button>
                <button
                    className={styles.demoBtn}
                    onClick={() => openModal("noEsc")}
                >
                    4. Modal không đóng khi nhấn Esc
                </button>
                <button
                    className={styles.demoBtn}
                    onClick={() => openModal("customClass")}
                >
                    5. Modal với custom className
                </button>
                <button
                    className={styles.demoBtn}
                    onClick={() => openModal("callbacks")}
                >
                    6. Modal với callbacks (Check Console)
                </button>
            </div>

            <Modal isOpen={activeModal === "basic"} onRequestClose={closeModal}>
                <h2>Basic Modal</h2>
                <p>Modal đơn giản với nút mở/đóng mặc định.</p>
            </Modal>

            <Modal
                isOpen={activeModal === "animation"}
                onRequestClose={closeModal}
                closeTimeoutMS={300}
            >
                <h2>Animation Modal</h2>
                <p>
                    Modal này sẽ chờ 300ms để chạy CSS transition trước khi
                    unmount.
                </p>
            </Modal>

            <Modal
                isOpen={activeModal === "noOverlay"}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={false}
            >
                <h2>No Overlay Click Close</h2>
                <p>
                    Click ra ngoài overlay sẽ không đóng modal này. Bạn phải
                    nhấn Esc hoặc nút Đóng.
                </p>
            </Modal>

            <Modal
                isOpen={activeModal === "noEsc"}
                onRequestClose={closeModal}
                shouldCloseOnEsc={false}
            >
                <h2>No Esc Close</h2>
                <p>
                    Phím Esc đã bị vô hiệu hóa. Hãy click ra overlay hoặc dùng
                    nút Đóng.
                </p>
            </Modal>

            <Modal
                isOpen={activeModal === "customClass"}
                onRequestClose={closeModal}
                className={styles["my-custom-modal"]}
                overlayClassName={styles["my-custom-overlay"]}
            >
                <h2>Custom ClassName Modal</h2>
                <p>
                    Modal này truyền thêm custom class để ghi đè CSS mặc định.
                </p>
            </Modal>

            <Modal
                isOpen={activeModal === "callbacks"}
                onRequestClose={closeModal}
                closeTimeoutMS={1000}
                onAfterOpen={() => console.log("Callback: Modal ĐÃ MỞ!")}
                onAfterClose={() => console.log("Callback: Modal ĐÃ ĐÓNG!")}
            >
                <h2>Callbacks Modal</h2>
                <p>
                    Bật DevTools Console (F12) để xem log được in ra khi mở và
                    đóng Modal này.
                </p>
            </Modal>
        </div>
    );
}

export default ModalDemo;
