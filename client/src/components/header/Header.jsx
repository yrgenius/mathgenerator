import React from 'react';
import image from '../../images/header.jpg';
import styles from './Header.module.css';

const Header = () => {

    return (
        <div className={styles.header}>
            <img className={styles.image} src={image} alt='logo Math Generator' ></img>
        </div>
    );

}

export default Header;
