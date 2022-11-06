import React from 'react';
import type { NextPage } from 'next';

import Header from '../components/Header';
import { SwitchButton } from '../components/SwitchButton';

import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default Home
