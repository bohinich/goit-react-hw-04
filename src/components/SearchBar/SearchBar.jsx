import { useState } from 'react';
import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => setSearch(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      toast.error('Please enter a search term!');
      return;
    }
    onSubmit(search);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search images and photos"
          className={styles.input}
          autoFocus
          autoComplete="off"
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
