import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('#loader');

const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const query = event.target.searchQuery.value.trim();
  gallery.innerHTML = '';

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please, enter a search term!',
    });
    return;
  }

  loader.classList.remove('hidden');

  fetchImages(query)
    .then(data => {
      loader.classList.add('hidden');

      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No Results',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
        });
        return;
      }

      const markup = renderGallery(data.hits);
      gallery.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
    })
    .catch(error => {
      loader.classList.add('hidden');
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong while fetching images...',
      });
      console.log(error);
    });
}
