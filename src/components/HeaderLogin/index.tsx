import React from "react";
import Image from "next/image";

import styles from './headerLogin.module.scss';
import logoImg from '../../../public/icons svg/Web/icons8-survey-50.png';
import logOutImg from '../../../public/icons svg/Web/icons8-logout-30.png';

export default function HeaderLogin() {
    return (
            <header className={styles.header}>
            <nav className={styles.fullWrapper}>
                <div className={styles.navWrapper}>
                    <div className={styles.container}>
                        <div className={styles.bar1}></div>
                        <div className={styles.bar2}></div>
                        <div className={styles.bar3}></div>
                    </div>
                        
                    <a href="#">
                        <Image src={logoImg} alt="logo" />
                        <p>NOME DA EMPRESA</p>
                    </a>

                    <div className={styles.divLog}>
                        <Image src={logOutImg} alt="logado" />
                    </div>
                </div>
            </nav>
        </header>
    )
}