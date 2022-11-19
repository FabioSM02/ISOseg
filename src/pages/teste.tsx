import React from "react";

import type { NextPage } from 'next';
import Image from 'next/image';

import HeaderLogin from '../components/HeaderLogin';
import Asks from '../components/Asks';

import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
        <HeaderLogin />
        <Asks />
    </div>
  )
}

export default Home