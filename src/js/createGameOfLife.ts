/* eslint-disable no-param-reassign */

import { drawField } from "./drawField";
import { getNextState } from "./getNextState";
import { isAnyoneAlive } from "./isAnyoneAlive";

export function createGameOfLife(
  sizeX: number,
  sizeY: number,
  htmlElement: HTMLElement
): void {
  let gameIsRunning = false;
  let timer: NodeJS.Timer;

  htmlElement.innerHTML = `<div class="field-wrapper"></div><button>Start</button>`;
  const fieldWrapper = htmlElement.querySelector(
    ".field-wrapper"
  ) as HTMLElement;
  const button = htmlElement.querySelector("button") as HTMLElement;

  let field: number[][] = new Array(sizeY)
    .fill(0)
    .map(() => new Array(sizeX).fill(0));

  const cellClickHandler = (x: number, y: number): void => {
    field[y][x] = field[y][x] === 0 ? 1 : 0;
    drawField(fieldWrapper, field, cellClickHandler);
  };

  drawField(fieldWrapper, field, cellClickHandler);

  function stopGame() {
    gameIsRunning = false;
    button.innerHTML = "Start";
    clearInterval(timer);
  }

  function startGame() {
    gameIsRunning = true;
    button.innerHTML = "Stop";

    timer = setInterval(() => {
      field = getNextState(field);
      drawField(fieldWrapper, field, cellClickHandler);
      if (!isAnyoneAlive(field)) {
        alert("All cells died");
        stopGame();
      }
    }, 500);
  }

  button.addEventListener("click", () => {
    if (!gameIsRunning) {
      startGame();
    } else {
      stopGame();
    }
  });
}
