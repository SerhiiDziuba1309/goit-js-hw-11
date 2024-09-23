import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const galleryElement = document.querySelector('.gallery');
const gallery = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements.query.value.trim();
  if (!query) {
    return;
  }

  galleryElement.innerHTML = '';

  showLoader();
  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        return;
      }
      renderImages(images);
      gallery.refresh();
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
});
