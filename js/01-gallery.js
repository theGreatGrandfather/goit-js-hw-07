import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

const itemsMarkup = galleryItems.map((item) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </li>`;
}).join("");

list.innerHTML = itemsMarkup;

const onImgClick = (e) => {
    
    e.preventDefault();
    console.log('e', e)
    
    if (e.target.nodeName === 'IMG'){ 
        const instance  = basicLightbox.create(`
            <img src="${e.target.dataset.source}">
        `,
        {
            onShow: (instance ) => {
                document.addEventListener("keydown", onEscapeKeydowm);
            },
            onClose: (instance ) => {
                document.removeEventListener("keydown", onEscapeKeydowm);
            },
        }
        );
        instance.show();

        function onEscapeKeydowm(e) {
            if (event.code === "Escape") {
                console.log('e', e)
                instance.close();
            }
        };
    };
};

list.addEventListener('click', onImgClick);
