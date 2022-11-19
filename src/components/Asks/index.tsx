import React from 'react';

import Header from '../Header';
import ButtonYes from '../Button';
import ButtonNo from '../Button';
import styles from './asks.module.scss';

export default function Fields(){
    return (
        // <div className={styles.wrapper}>
        //     <form action="" method='post' className={styles.forms}>
        //         <div className={styles.table}>
        //             <ButtonYes />
        //             <label>A empresa possui um sistema de backups?</label>
        //             {/* <ButtonNo /> */}
        //         </div>
        //     </form>
        // </div>
        
        <div className={styles.wrapper}>
        <form action="" method='post' className={styles.forms}>
            <div className={styles.table}>
                <div className={styles.wrapperButton}>
                    <button value="sim" className={styles.buttonyes} type="button">
                    </button>
                </div>

                <div className={styles.pergunta}>
                    <label className={styles.ask}>A empresa possui um sistema de backups?</label>
                </div>
                
                <div className={styles.wrapperButton}>
                    <button value="nao"  className={styles.buttonno} type="button">
                    </button>
                </div>
            </div>

            {/* CORRIGIR DEPOIS */}

            <div className={styles.table}>
                <div className={styles.wrapperButton}>
                    <button value="sim" className={styles.buttonyes} type="button">
                    </button>
                </div>

                <div className={styles.pergunta}>
                    <label className={styles.ask}>Como funciona esse sistema?</label>
                </div>
                
                <div className={styles.wrapperButton}>
                    <button value="nao"  className={styles.buttonno} type="button">
                    </button>
                </div>
            </div>

            <div className={styles.table}>
                <div className={styles.wrapperButton}>
                    <button value="sim" className={styles.buttonyes} type="button">
                    </button>
                </div>

                <div className={styles.pergunta}>
                    <label className={styles.ask}>Quem é responsavel pelo funcionamento do processo de backup?</label>
                </div>
                
                <div className={styles.wrapperButton}>
                    <button value="nao"  className={styles.buttonno} type="button">
                    </button>
                </div>
            </div>

            <div className={styles.table}>
                <div className={styles.wrapperButton}>
                    <button value="sim" className={styles.buttonyes} type="button">
                    </button>
                </div>

                <div className={styles.pergunta}>
                    <label className={styles.ask}>Os backups são testados?</label>
                </div>
                
                <div className={styles.wrapperButton}>
                    <button value="nao"  className={styles.buttonno} type="button">
                    </button>
                </div>
            </div>

        </form>
    </div>
    
        )
}