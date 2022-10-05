import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ==================================================================
// Создание и рендер разметки по массиву данных galleryItems
// и предоставленному шаблону элемента галереи.

const allGallery = document.querySelector(".gallery");
const itemMarkup = createNewCardGallery(galleryItems);

function createNewCardGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
        </a>
        </div>`;
    })
    .join("");
}
allGallery.insertAdjacentHTML("beforeend", itemMarkup);

// =====================================================================
// Modal Window (Открытие модального окна по клику на элементе галереи.)
allGallery.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  const activePicture = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
       <img src="${activePicture}" width="800" height="600">
	`,

    {
      onShow: () => {
        window.addEventListener("keydown", closeOnClickEscapeBtn);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeOnClickEscapeBtn);
      },
    }
  );
  instance.show();

  // ==========================================================================
  // Добавь закрытие модального окна по нажатию клавиши Escape.

  function closeOnClickEscapeBtn(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);
