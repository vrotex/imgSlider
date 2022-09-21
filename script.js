const pathArray = ["./images/img-1.jpg", "./images/img-2.jpg", "./images/img-3.jpg", "./images/img-4.jpg", "./images/img-5.jpg", "./images/img-6.jpg", "./images/img-7.jpg", "./images/img-8.jpg", "./images/img-9.jpg", "./images/img-10.jpg"];
const dotArray = [];

const imageContainer = document.querySelector(".image-container");
const forwardButton = document.querySelector(".forward-btn")
const backButton = document.querySelector(".back-btn")
let index = 0;
let count = 0;


for (let i = 0; i < pathArray.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${pathArray[i]})`;
    imageContainer.append(card);
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.id = i;
    document.querySelector(".nav").append(dot);
    dotArray.push(dot);
}





document.querySelector(".dot").classList.add("dot--active")

const scrollItem = (countCard) => {
    const ImageWidth = document.querySelector(".card").clientWidth;
    imageContainer.scroll({ top: 0, left: ImageWidth * countCard, behavior: "smooth" });
    count = countCard;
    colorDot(countCard)
}
forwardButton.addEventListener("click", () => {
    count < pathArray.length - 1 ? ++count : count = 0;
    scrollItem(count)
})
backButton.addEventListener("click", () => {
    count > 0 ? --count : count = pathArray.length - 1;
    scrollItem(count)
})

dotArray.map(item => item.addEventListener("click", () => {

    scrollItem(item.id);
}))

const colorDot = (item) => {
    dotArray.map(item => item.classList.remove("dot--active"));
    document.getElementById(item).classList.add("dot--active");

}
const cardArray = Array.from(document.querySelectorAll(".card"))


cardArray.map(item => item.addEventListener("click", () => {
    imageContainer.classList.toggle("cont--active");
    item.classList.toggle("card--active");
    imageContainer.classList.toggle("image-container--active");
    [forwardButton, backButton, document.querySelector(".nav")].map(item => item.classList.toggle("opacity"));
}))