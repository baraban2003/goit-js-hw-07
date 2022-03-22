import { galleryItems } from './gallery-items.js';
// Change code below this line
//get galleryItems items for work
const makeGalleryItemsLibrary = element => {
  const { preview, original, description } = element;

  return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
};

//set galleryItems on DOM
const images = document.querySelector('.gallery');

const makeSiteStructure = galleryItems.map(makeGalleryItemsLibrary).join('');

images.innerHTML = makeSiteStructure;

//Opening pictures
images.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  window.addEventListener('keydown', onEscPress);
  e.preventDefault();
  //console.dir(e.target.dataset.source);
  const instance = basicLightbox.create(`
		<img width="1280" src= '${e.target.dataset.source}'>
	`);
  instance.show();

  // Closing pictures by pressing on Esc
  function onEscPress(elem) {
    if (elem.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscPress);
    }
  }
}
