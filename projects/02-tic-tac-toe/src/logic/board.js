import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] && // Miro si existe valor
      boardToCheck[a] === boardToCheck[b] && // Miro si tiene el mismo valor a y b
      boardToCheck[b] === boardToCheck[c]
    )
      return boardToCheck[a]; // x u o
  }
  return null;
};

export const checkEndGame = (boardToCheck) => {
  return !boardToCheck.includes(null);
};
