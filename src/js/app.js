import Game from "./game/game";
import Hummer from "./hummer/hummer";

document.addEventListener("DOMContentLoaded", () => {
  new Game(".board", 9);
  new Hummer(".board");
});
