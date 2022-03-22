import { galleryItems } from './gallery-items.js';

// Change code below this line

//get galleryItems items for work
const makeGalleryItemsLibrary = element => {
  const { preview, original, description } = element;

  return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /> </a>`;
};

//set galleryItems on DOM
const images = document.querySelector('.gallery');

const makeSiteStructure = galleryItems.map(makeGalleryItemsLibrary).join('');

images.innerHTML = makeSiteStructure;

//Opening pictures
images.addEventListener('click', e => {
  e.preventDefault();
});

let lightbox = new SimpleLightbox('.gallery a', {
  close: true,
  captions: true,
  captionsData: 'alt',
  captionDelay: '250',
});
