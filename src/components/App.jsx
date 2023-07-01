import React, { useState } from 'react';
import Modal from './modal/Modal';
import styles from './app/App.module.css';

const App = () => {
    const [modalActive, setModalActive] = useState(true);

    return (
        <div className={styles.wrapper}>
            <Modal
                active={modalActive}
                setActive={setModalActive} />
        </div>
    );
};

export default App;