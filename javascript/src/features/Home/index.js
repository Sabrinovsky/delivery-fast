import React from 'react'
import styles from './home.module.css'; // Import css modules stylesheet as styles
import {Link} from 'react-router-dom'

export const Home = ()=>{
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <Link to='/login'> Login</Link>
      <Link to='/admin'> admin</Link>
    </div>
  )
}
