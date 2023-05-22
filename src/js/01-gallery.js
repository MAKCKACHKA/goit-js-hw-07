import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemsMarkup = galleryItems
  .map(
    (item) => `
  <li class="gallery__item">
    <a href="${item.original}">
      <img src="${item.preview}" alt="${item.description}" class="gallery__image">
    </a>
  </li>
`
  )
  .join("");
gallery.innerHTML = galleryItemsMarkup;

let currentModal = null;

const head = document.querySelector("head");
const simpleLightboxStyles = document.createElement("link");
simpleLightboxStyles.rel = "stylesheet";
simpleLightboxStyles.href =
  "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";
head.appendChild(simpleLightboxStyles);

gallery.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName === "IMG") {
    currentModal = basicLightbox.create(`
      <img src="${evt.target.parentNode.href}" alt="${evt.target.description}">
    `);
    currentModal.show();

    document.addEventListener("keydown", handleKeyDown);
  }
});

const handleKeyDown = (evt) => {
  if (currentModal) {
    currentModal.close();
    currentModal = null;
  }
};
