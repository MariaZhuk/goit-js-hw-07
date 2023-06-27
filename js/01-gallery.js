import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. Створюємо розмітку виходячи з наданних данних
const galleryListEl = document.querySelector('.gallery');
const CardsMarkUp = createImgEl(galleryItems);


function createImgEl(galleryItems) { 

    return galleryItems
        .map(({ preview, original, description }) => {
       

    return `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>`}).join(" ");
    
}

galleryListEl.insertAdjacentHTML('beforeend', CardsMarkUp) // вставили в html

 //вішаєо слухача події на ul, він відлавлює подію
galleryListEl.addEventListener("click", event => { 
     event.preventDefault();
    
    const dataSet = event.target.dataset.source;
    
     if (event.target.classList.contains('gallery__item')) {
         return;
    };
    const instance = basicLightbox.create(`
    <img src="${dataSet}" width="800" height="600">
`)
    instance.show();

    window.addEventListener("keydown", event => { 
        if (event.code === "Escape") { 
            instance.close();
        }
    })   
})
console.log(galleryItems);


    











