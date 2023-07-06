import React from 'react';
import styles from './Button.module.css';

const Button = ({ text = 'click', onClick = f => f }) => {
    return (
        <button
            className={styles.wrapper}
            onClick={onClick}
        >{text}</button>
    );
};

export default Button;