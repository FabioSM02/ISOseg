import React from "react";

import styles from '../../styles/components/switch-button.module.css';

export function SwitchButton(){
    return(
        <label className={styles.container}>
            <input type="checkbox" className={styles.changeMode} name="light-dark-mode" id="switch-button" />
            <span className={styles.control}></span>
        </label>
    );
}