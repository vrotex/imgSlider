//class loop
const pathArray = ["./images/img-1.jpg", "./images/img-2.jpg", "./images/img-3.jpg", "./images/img-4.jpg", "./images/img-5.jpg", "./images/img-6.jpg", "./images/img-7.jpg", "./images/img-8.jpg", "./images/img-9.jpg", "./images/img-10.jpg"];
const dotArray = [];

const imageContainer = document.querySelector(".image-container");

class Card {
    elem = document.createElement("div");
    className = "card";
    constructor(image) {
        this.image = image;
    }
    create() {
        this.elem.classList.add(this.className);
        this.elem.style.backgroundImage = `url(${this.image})`;
        imageContainer.append(this.elem);
    }
    popUp() {
        this.elem.addEventListener("click", () => {
            this.elem.classList.toggle("card--active");
        })
    }
}




for (let i = 0; i < pathArray.length; i++) {
    const cardObject = new Card(pathArray[i]);
    cardObject.create();
    cardObject.popUp();
}

class Dot {
    constructor(id) {
        this._id = id;
    }
    get id() { return this._id; }
    set id(value) { this._id = value; }

}