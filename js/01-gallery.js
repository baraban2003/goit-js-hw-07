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

const instance = basicLightbox.create(
  `
		<img class="modal-img" src= ''>
	`,
  {
    onShow: instance => {
      window.addEventListener('keydown', onEscPress);
    },
    onClose: instance => {
      window.addEventListener('keydown', onEscPress);
    },
  },
);

images.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('.modal-img').src = e.target.dataset.source;
  //console.dir(e.target.dataset.source);
  instance.show();
}

// Closing pictures by pressing on Esc
function onEscPress(elem) {
  if (elem.key === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', onEscPress);
  }
}
