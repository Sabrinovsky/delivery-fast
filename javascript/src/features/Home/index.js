import React from 'react'
import styles from './home.module.css'; // Import css modules stylesheet as styles
import {Link} from 'react-router-dom'

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index'

export const Home = ()=>{
  return (
    <>
      <Header/>
      <div className={styles.home}>
        <h1>Home</h1>
        <Link to='/login'> Login</Link>
        <Link to='/admin'> admin</Link>
      </div>
      <Footer/>
    </>
  )
}
