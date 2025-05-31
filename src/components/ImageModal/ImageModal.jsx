import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
      {image.description && <p>Description: {image.description}</p>}
    </Modal>
  );
};

export default ImageModal;
