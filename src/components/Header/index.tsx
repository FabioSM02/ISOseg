import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from './header.module.scss';
import logoImg from '../../../public/vercel.svg';

export default function Header(){

    // const li = document.querySelectorAll('ul>li')
    // const menu = document.querySelector('.container')
    // const div_ul = document.querySelector('.div-ul')

    // Fazer lógica para modo responsivo

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
                    </a>

                    <div className={styles.divUl}>
                        <ul className={styles.right}>
                            <li>
                                <a href="#">Conhecer Planos</a>
                            </li>
                            <li>
                                <a href="#">Contribuidores</a>
                            </li>
                            <li>
                                <a href="#">Cadastrar</a>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}