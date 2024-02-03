import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import fetchImages from './api/pixabay'
import refs from './constants/selectors'
import createGallery from './templates/createGallery'
import { GALLERY_LINK } from './constants/classes.js'
import { toastError, toastSuccess } from './components/toast/toast';

refs.searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const queryInput = event.target.elements.query.value;

  if (queryInput === '') {
    return;
  }

  refs.galleryContainer.innerHTML = '';
  refs.loaderContainer.style.display = 'block';

  fetchImages(queryInput)
    .then(function ({hits, total}) {
      if (Array.isArray(hits) && hits.length > 0) {
        const galleryHTML = hits.map(createGallery).join('');
        refs.galleryContainer.innerHTML = galleryHTML;
        
        toastSuccess(`Was found: ${total} images`)

        const lightbox = new SimpleLightbox(`.${GALLERY_LINK}`);
         
        lightbox.refresh();
      } else {
        toastError('Sorry, there are no images matching your search query. Please try again!')
      }
    })
    .catch(function (error) {
      toastError(`Error fetching images: ${error}`)
    })
    .finally(function () {
      refs.searchForm.reset();
      refs.loaderContainer.style.display = 'none';
    });
});
