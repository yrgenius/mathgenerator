import React, { useState } from 'react';
import Modal from './modal/Modal';
import Header from './header/Header';
import styles from './app/App.module.css';

const App = () => {
    const [modalActive, setModalActive] = useState(true);

    return (
        <div className={styles.wrapper}>
            <Header />
            <Modal
                active={modalActive}
                setActive={setModalActive} />
        </div>
    );
};

export default App;