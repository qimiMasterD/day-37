import { useState } from "react";

import styles from "./ModalDemo.module.scss";

import Modal from "../../components/Modal";

function ModalDemo() {
    const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);

    return (
        <div className={styles.container}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            praesentium qui impedit. Soluta iste sed praesentium eveniet
            laudantium accusantium deserunt asperiores, qui incidunt aut
            explicabo, consectetur culpa corporis, perspiciatis facere ex rerum
            laborum odit iure dolores delectus. Cupiditate, est voluptates error
            alias quaerat mollitia voluptate itaque soluta sint nesciunt ducimus
            impedit nam maxime voluptatibus saepe, harum eius eum earum aperiam
            sit voluptatum. Magnam possimus, rem numquam corporis similique
            beatae est incidunt quas nulla dolore. Cum architecto delectus rerum
            aut doloremque, voluptatem et laborum nihil totam, placeat similique
            quia est reiciendis ullam explicabo sunt, iure accusamus
            praesentium! Perferendis molestiae autem quos consectetur, dolore
            obcaecati voluptate enim voluptatum voluptatibus sed. Fugiat rerum
            odio sint optio suscipit quasi dolores, magni minima adipisci
            eveniet, quos, odit doloremque autem nostrum dignissimos
            perferendis. Blanditiis molestias facere, laudantium inventore ad
            obcaecati ex mollitia, totam est corporis amet repellendus! Autem,
            fuga obcaecati? Natus, ex animi. Ut blanditiis ullam recusandae
            perspiciatis unde doloremque, minima reiciendis suscipit laudantium,
            nisi aspernatur vero animi vel sequi architecto ab consectetur
            dolorum error, a ipsam eum itaque dolorem? In, libero. Quae esse
            pariatur ad ratione culpa maxime, voluptate accusamus facilis atque
            voluptas voluptatibus molestiae? Eius quasi rem esse, ipsam
            laboriosam odit vero vel at aliquam ipsum est, commodi magni
            sapiente non libero eum quos consequuntur corporis blanditiis,
            reprehenderit illum. Iste iusto dolores placeat, consectetur eum
            laborum autem nulla fuga illo modi quam quibusdam culpa cum et
            dolor. A dignissimos nam accusamus animi reprehenderit quisquam.
            Molestiae iste quidem veniam temporibus voluptates distinctio vero
            quasi molestias non neque reprehenderit optio officiis tempora
            tenetur quas totam atque laudantium aliquid eveniet praesentium,
            libero sed minus nisi veritatis. Voluptate, dignissimos architecto
            cupiditate culpa eligendi assumenda, eos sed sequi impedit natus
            quis, omnis rerum dolor? Deleniti nisi officia, voluptatem tenetur
            reprehenderit illo praesentium veritatis quos ipsa dolorum porro, id
            blanditiis?
            <button
                onClick={() => {
                    setIsBasicModalOpen(true);
                }}
            >
                Open Modal
            </button>
            <Modal
                isOpen={isBasicModalOpen}
                onAfterOpen={() => console.log("Modal đã mở")}
                onAfterClose={() => console.log("Modal đã đóng")}
                onRequestClose={() => setIsBasicModalOpen(false)}
                closeTimeoutMS={300}
                overlayClassName="custom-overlay"
                className="custom-modal"
                bodyOpenClassName="modal-open"
                htmlOpenClassName="modal-open"
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
            >
                <h2>Modal Content</h2>
                <p>Đây là nội dung modal</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod ab iusto est, aut ipsum, dolorem odio corporis magni
                    modi, consectetur laudantium mollitia quia delectus sed?
                    Deserunt ea, cumque laudantium laborum ut beatae amet
                    ducimus necessitatibus dolorem ab esse error aspernatur
                    itaque enim magni expedita adipisci repellendus a sed velit.
                    Expedita quam tenetur eligendi ratione inventore, amet
                    distinctio corrupti earum similique recusandae eaque et,
                    provident beatae non. Nobis dignissimos reprehenderit id
                    fuga distinctio esse ut dolorum labore explicabo? Veniam
                    doloremque quaerat dignissimos libero enim maiores
                    quibusdam! Adipisci quibusdam, minima necessitatibus
                    possimus dolorum pariatur ipsum alias cumque quo totam,
                    officia fugiat explicabo.
                </p>
            </Modal>
        </div>
    );
}

export default ModalDemo;
