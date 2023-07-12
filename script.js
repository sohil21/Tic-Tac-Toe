let turn = "X";
let gameOver = false;

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxText1 = document.getElementsByClassName("boxsign");
  let abc = boxText1.innerText;
  const win = [
    [0, 1, 2, 0, -5, 0],
    [3, 4, 5, 0, 3, 0],
    [6, 7, 8, 0, 11, 0],
    [0, 3, 6, -8, 3, 90],
    [1, 4, 7, 0, 3, 90],
    [2, 5, 8, 8, 3, 90],
    [0, 4, 8, 0, 3, 45],
    [2, 4, 6, 0, 3, 135],
  ];
  win.forEach((e) => {
    if (
      boxText1[e[0]].innerText === boxText1[e[1]].innerText &&
      boxText1[e[2]].innerText === boxText1[e[1]].innerText &&
      boxText1[e[0]].innerText !== ""
    ) {
      document.getElementById("winLine").style.visibility = "visible";

      document.getElementById(
        "winLine",
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;

      document.querySelector(".infoText").innerText =
        boxText1[e[0]].innerText + " Won";
      gameOver = true;
    }
  });
};

const boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((e) => {
  const boxText = e.querySelector(".boxsign");
  e.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      checkWin();

      if (!gameOver) {
        document.getElementsByClassName("infoText")[0].innerText =
          "Turn for " + turn;
      }
      // else if (gameOver) {
      //   document.getElementById("countdown").style.visibility = "visible";
      //   document.getElementById("countdown").innerText =
      //     "Game will Restart in 10 second";

      //   setTimeout(() => {
      //     btnRestart.click();
      //   }, 10000);
      // }
    }
  });
});

btnRestart.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxsign");

  Array.from(boxText).forEach((e) => {
    e.innerText = "";
  });
  turn = "X";
  gameOver = false;
  document.getElementById("winLine").style.visibility = "hidden";
  // document.getElementById("countdown").style.visibility = "hidden";
  document.getElementsByClassName("infoText")[0].innerText = "Turn for " + turn;
});
