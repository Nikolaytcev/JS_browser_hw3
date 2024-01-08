import "./hummer.css";
import image from "../../img/goblin-beaten.png";

export default class Hummer {
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
      const html =
        "<p class='pass'>Число промахов: <span class='pass-count'>0</span></p><p class='target'>Число попаданий: <span class='target-count'>0</span></p>";
      const elem = document.querySelector(".scoreboard");
      elem.insertAdjacentHTML("beforeend", html);
    }

    if (cell.classList.contains("picture")) {
      this.target++;
      document.querySelector(".target-count").textContent =
        this.target.toString();
      cell.src = image;
    } else {
      this.pass++;
      if (this.pass == 5) {
        this.pass = 0;
        this.target = 0;
        document.querySelector(".scoreboard").textContent =
          "Вы проиграли! Игра завершена! Для начала игры нажмите лкм на игровое поле.";
      } else {
        document.querySelector(".pass-count").textContent =
          this.pass.toString();
      }
    }
  }
}
