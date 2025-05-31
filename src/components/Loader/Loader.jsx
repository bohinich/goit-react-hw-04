import { DotLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <DotLoader color="#4fa94d" />
  </div>
);

export default Loader;
