import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.forEach((element) => {
  const galleryItem = document.createElement("a");
  galleryItem.className = "gallery__item";
  galleryItem.href = element.original;

  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = element.preview;
  galleryImage.alt = element.description;

  galleryItem.append(galleryImage);
  items.push(galleryItem);
});

gallery.append(...items);

new SimpleLightbox(".gallery a", {
  animationSpeed: 300,
  scrollZoom: false,
});
