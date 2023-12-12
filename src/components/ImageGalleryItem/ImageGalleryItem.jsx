import css from './ImageGalleryItem.module.css'; // імпортуємо стилі
import PropTypes from 'prop-types'; // типизація пропсів

// Функціональний компонент, який відповідає за елемент галереї.
export const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  togleModal,
}) => {
  return (
    <li
      onClick={() => {
        togleModal(largeImageURL, tags);
      }}
      className={css.galleryItem}
    >
      <img
        loading="lazy"
        className={css.ImageGalleryItem}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};

// типизація пропсів
ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
