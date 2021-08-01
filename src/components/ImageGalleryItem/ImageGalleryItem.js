import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem({
  webformatURL,
  alt,
  largeImageURL,
  id,
  onImageClick,
}) {
  const getlargeImageURL = e => {
    onImageClick({
      url: e.target.dataset.largeimageurl,
      alt: e.target.alt,
    });
  };
  return (
    <img
      src={webformatURL}
      alt={alt}
      className={styles.image}
      data-largeimageurl={largeImageURL}
      data-id={id}
      onClick={getlargeImageURL}
    />
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ImageGalleryItem;