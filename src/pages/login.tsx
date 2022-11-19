import React from "react";
import Image from "next/image";

import styles from './login.module.scss';
import logoImg from '../../public/icons svg/Web/icons8-survey-50.png'

export default function Login() {
    return (
        <div className={styles.fullWrapper}>
            <div className={styles.wrapper}>
                <form action="" method="post" className={styles.forms}>
                    <div className={styles.title}>
                        <p>Login</p>
                    </div>
                    <input type="text" className={styles.cnpj} placeholder="Digite o CNPJ da empresa" />
                    <br />
                    <input type="password" name="" id="" className={styles.password} placeholder="Digite a senha" />
                    <br />
                    <div className={styles.wrapperButton}>
                        <button type="submit" className={styles.button} >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}