import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemsMarkup = galleryItems
  .map(
    (item) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}">
    </a>
  </li>
`
  )
  .join("");
gallery.innerHTML = galleryItemsMarkup;

const head = document.querySelector("head");
const simpleLightboxStyles = document.createElement("link");
simpleLightboxStyles.rel = "stylesheet";
simpleLightboxStyles.href =
  "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.0/simple-lightbox.min.css";
head.append(simpleLightboxStyles);

const simpleLightboxScript = document.createElement("script");
simpleLightboxScript.src =
  "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.0/simple-lightbox.min.js";

simpleLightboxScript.onload = () => {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
};
head.append(simpleLightboxScript);
