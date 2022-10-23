import React, { useEffect } from "react";

import styles from '../../styles/components/switch-button.module.css';

export function SwitchButton(){

    const wrapperButton = document.getElementsByClassName('container')
    const allHtml = document.body

    // function changeScreenMode() { // Usar UseEffect => se 0 claro 1 => escuro
    //     wrapperButton.addEventListener('click', () => {
    //         body.classList.toggle('dark-mode:root');
    //     })
    // }

    return(
        <label className={styles.container}>
            <input type="checkbox" className={styles.changeMode} name="light-dark-mode" id="switch-button" />
            <span className={styles.control}></span>
        </label>
    );
}