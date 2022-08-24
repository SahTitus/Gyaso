import React from 'react'
import { Search } from '@mui/icons-material'
import styles from '../styles/SearchForm.module.css'

const SearchForm = ({searchTerm, handleChange, handleSubmit}) => {

  return (
    <div className={styles.form}>
        <form onSubmit={handleSubmit} className={styles.form__container}>
          <Search className={styles.linkIcon} />
          <input
            type="text"
            className={styles.input}
            placeholder="Search here..."
            onChange={handleChange}
            value={searchTerm}
          />

        </form>
      </div>
  )
}

export default SearchForm