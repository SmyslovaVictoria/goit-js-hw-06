const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const newImagesList = document.querySelector(".gallery");
const imageCards = images
  .preventDefault()
  .map(
    (image) =>
      `<li class = "gallery__item"><img class = "gallery__img" src= "${image.url}" width = "600" alt = "${image.alt}"></img></li>`
  )
  .join("");

newImagesList.insertAdjacentHTML("afterbegin", imageCards);
