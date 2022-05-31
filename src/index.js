import './sass/main.scss';
import ImagesApiService from './js/fetch-images';
import imagesMarkup from './tempelates/image-markup.hbs';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
console.log(loadMoreBtn);

const imagesApiService = new ImagesApiService();

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  clearGallery();
  imagesApiService.query = e.currentTarget.elements.searchQuery.value;
  imagesApiService.resetPage();
  imagesApiService.fetchImages().then(appendImagesMarkup);
  loadMoreBtn.classList.remove('is-hidden');
}

function onLoadMore(e) {
  imagesApiService.fetchImages().then(appendImagesMarkup);
}

function appendImagesMarkup(hits) {
  gallery.insertAdjacentHTML('beforeend', imagesMarkup(hits));
}

function clearGallery() {
  gallery.innerHTML = '';
}
