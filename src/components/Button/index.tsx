import React from "react";

import styles from './button.module.sass';

export default function ButtonYes(){
    return (
        <div className={styles.wrapperButton}>
            <button value="sim" className={styles.button} type="button">
            </button>
        </div>
    )
}