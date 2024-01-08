/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/game/game.js


class Game {
  constructor(element, quantity) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this._element = element;
    this.quantity = quantity;
    this.createElements();
    const cellElements = this._element.querySelectorAll(".cell");
    let elemWithPic = cellElements[Math.floor(Math.random() * cellElements.length)];
    this.insertPicture(elemWithPic);
    setInterval(() => {
      this.clearCell(elemWithPic);
      elemWithPic = cellElements[Math.floor(Math.random() * cellElements.length)];
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
    picture.src = goblin_namespaceObject;
    picture.className = "picture";
    element.appendChild(picture);
  }
  clearCell(element) {
    const picture = element.querySelector(".picture");
    picture.remove();
  }
}
;// CONCATENATED MODULE: ./src/img/goblin-beaten.png
const goblin_beaten_namespaceObject = __webpack_require__.p + "6fb857f0aafea34b8f6e.png";
;// CONCATENATED MODULE: ./src/js/hummer/hummer.js


class Hummer {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this._element = element;
    this.tap = this.tap.bind(this);
    this.pass = 0;
    this.target = 0;
    this._element.addEventListener("click", this.tap);
  }
  tap(e) {
    const cell = e.target;
    if (document.querySelector(".target-count") == null) {
      document.querySelector(".scoreboard").textContent = "";
      const html = "<p class='pass'>Число промахов: <span class='pass-count'>0</span></p><p class='target'>Число попаданий: <span class='target-count'>0</span></p>";
      const elem = document.querySelector(".scoreboard");
      elem.insertAdjacentHTML("beforeend", html);
    }
    if (cell.classList.contains("picture")) {
      this.target++;
      document.querySelector(".target-count").textContent = this.target.toString();
      cell.src = goblin_beaten_namespaceObject;
    } else {
      this.pass++;
      if (this.pass == 5) {
        this.pass = 0;
        this.target = 0;
        document.querySelector(".scoreboard").textContent = "Вы проиграли! Игра завершена! Для начала игры нажмите лкм на игровое поле.";
      } else {
        document.querySelector(".pass-count").textContent = this.pass.toString();
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


document.addEventListener("DOMContentLoaded", () => {
  new Game(".board", 9);
  new Hummer(".board");
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;