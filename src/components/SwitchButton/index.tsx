import React, { useEffect } from "react";

import styles from './switchButton.module.scss';

export function SwitchButton(){

    // const wrapperButton = document.getElementsByClassName('container')
    // const allHtml = document.body

    // https://stackoverflow.com/questions/66412291/nextjs-how-to-use-window-in-custom-hook
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