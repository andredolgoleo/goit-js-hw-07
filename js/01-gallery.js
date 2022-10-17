import { galleryItems } from './gallery-items.js';
import * as basicLightbox from '../node_modules/basiclightbox/src/scripts/main.js';

const gallery = document.querySelector('.gallery');

galleryItems.map(image => {
  const gallery__item = `
  <div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
</div>`;

  gallery.insertAdjacentHTML('afterbegin', gallery__item);
});

gallery.addEventListener('click', e => {
  e.preventDefault();
  const item = e.target;
  const instance = basicLightbox.create(
    `
    <img src="${item.getAttribute('data-source')}">
`);

  if (item.tagName !== 'IMG') {
    return;
  };

  window.addEventListener('keydown', e => {
    if (e.key !== 'Escape') {
      return;
    };

    instance.close();
  });

  instance.show();
});
