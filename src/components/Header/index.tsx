import React from "react";
import Image from "next/image";

import styles from '../../styles/components/header.module.css';
import logoImg from '../../../public/vercel.svg';

export function Header(){

    // const

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src={logoImg} alt="logo" />
            </div>
            <div className={styles.menu}>
                <p>
                    Conhecer Planos
                </p>
                <p>
                    Contribuidores
                </p>
                <p>
                    Cadastrar
                </p>
                <p>
                    Login
                </p>
            </div>
        </header>
    );
}