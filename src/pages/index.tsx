import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

import Header from '../components/Header';
import { SwitchButton } from '../components/SwitchButton';

import styles from './home.module.scss';
import auditImage from '../../public/icons svg/engineering_team.svg';

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
          <div className={styles.containerImage}>
            <Image src={auditImage} className={styles.images} alt="introduction image" />
          </div>
          <p className={styles.text}>
            Temos como objetivo fazer uma auditoria interna na empresa para que assim a empresa possa analisar o quão distante ela esta de conseguir a certificação da ISO 27002.
          </p>
      </main>
      <section className={styles.sectionPlans}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur at eum cumque adipisci, magni cum nulla qui saepe, ut fugiat libero distinctio impedit accusamus animi dolore necessitatibus enim facere!
        </p>
        <div className={styles.containerImage}>
          <Image src={auditImage} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Home
