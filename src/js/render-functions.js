// render-functions.js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const renderImages = images => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Очищення попередніх результатів

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <div class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link">
                <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
            </a>
            <div class="info">
                <p class="info-item"><strong>Likes</strong> ${likes}</p>
                <p class="info-item"><strong>Views</strong> ${views}</p>
                <p class="info-item"><strong>Comments</strong> ${comments}</p>
                <p class="info-item"><strong>Downloads</strong> ${downloads}</p>
            </div>
        </div>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
};

export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};
