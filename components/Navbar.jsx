import { Avatar } from '@mui/material'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <h3 className={styles.logo}>Gyaso</h3>
        <div className={styles.navbar__right}> <Avatar className={styles.avatar}/></div>
    </div>
  )
}

export default Navbar