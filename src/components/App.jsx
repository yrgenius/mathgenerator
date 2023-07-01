import React, { useState } from 'react';
import Modal from './modal/Modal';
import Header from './header/Header';
import Main from './main/Main';
import styles from './App.module.css';

const App = () => {
    const [modalActive, setModalActive] = useState(true);

    return (
        <div className={styles.wrapper}>
            <Header />
            <Main />
            <Modal
                active={modalActive}
                setActive={setModalActive} />
        </div>
    );
};

export default App;