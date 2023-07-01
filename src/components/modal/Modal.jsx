import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ active, setActive }) => {
    const content = {
        text: 'Нет времени составлять для ребенка примеры? Просто выберете в конструкторе параметры, и мы сгенерируем их за вас',
        subtext: '(тестовый режим, сайт в разработке)',
    }

    const modalClass = (active)
        ? `${styles.wrapper} ${styles.active}`
        : `${styles.wrapper}`;

    return (
        <div className={modalClass} onClick={() => setActive(false)}>
            <div className={styles.content}>
                <p className={styles.text}>{content.text}</p>
                <p className={styles.sub_text}>{content.subtext}</p>
            </div>
        </div>
    );
};

export default Modal;