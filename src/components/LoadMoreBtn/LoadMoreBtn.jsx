import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <div className={styles.wrapper}>
    <button onClick={onClick} className={styles.button}>Load more</button>
  </div>
);

export default LoadMoreBtn;
