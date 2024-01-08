import image from "../../img/goblin.png";
import "./game-style.css";

export default class Game {
  constructor(element, quantity) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this._element = element;
    this.quantity = quantity;
    this.createElements();

    const cellElements = this._element.querySelectorAll(".cell");
    let elemWithPic =
      cellElements[Math.floor(Math.random() * cellElements.length)];
    this.insertPicture(elemWithPic);

    setInterval(() => {
      this.clearCell(elemWithPic);
      elemWithPic =
        cellElements[Math.floor(Math.random() * cellElements.length)];
      this.insertPicture(elemWithPic);
    }, 1000);
  }

  createElements() {
    for (let i = 0; i < this.quantity; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      this._element.appendChild(cell);
    }
  }

  insertPicture(element) {
    const picture = document.createElement("img");
    picture.src = image;
    picture.className = "picture";
    element.appendChild(picture);
  }

  clearCell(element) {
    const picture = element.querySelector(".picture");
    picture.remove();
  }
}
