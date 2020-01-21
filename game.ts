var turnCount: number = 0;
var oCount: number = 0;
var xCount: number = 0;
var tieCount: number = 0;
var starter: string;
var nonStarter: string;
var starterArr: string[] = [];
var nonStartArr: string[] = [];

const o = "o";
const x = "x";

function startGame(clickedId: any) {
  document.getElementById("starter").setAttribute("style", "display: none;");
  document.getElementById("game").setAttribute("style", "display: block;");
  starter = clickedId;
  document.getElementById("turn").innerHTML = starter + " starts";

  if (starter == "o") {
    nonStarter = x;
  } else {
    nonStarter = o;
  }

  document
    .getElementById("restart")
    .setAttribute("style", "display: inline-block;");
}

function drawOnGrid(clickedId: any) {
  turnCount++;
  var num = document.getElementById("count");
  num.textContent = <string>(<unknown>turnCount);

  var el = document.getElementById(clickedId);
  if (el.textContent == "-") {
    if (turnCount % 2 == 1) {
      document.getElementById("turn").innerHTML = nonStarter + " turn";
      nextTurn(el, starter, starterArr, clickedId);
    } else {
      document.getElementById("turn").innerHTML = starter + " turn";
      nextTurn(el, nonStarter, nonStartArr, clickedId);
    }
  }
}

function nextTurn(el: any, letter: string, list: string[], clickedId: any) {
  el.textContent = letter;
  el.setAttribute("disabled", "disabled");
  el.setAttribute("style", "color: black;");
  list.push(clickedId);

  // at least 5 moves until someone wins
  if (turnCount >= 5) {
    checkWin(letter, list);
  }
}

function checkWin(el: string, places: string[]) {
  if (
    places.indexOf("one") !== -1 &&
    places.indexOf("four") !== -1 &&
    places.indexOf("seven") !== -1
  ) {
    // vertical
    document.getElementById("win").innerHTML = el + " wins!";
  } else if (
    places.indexOf("two") !== -1 &&
    places.indexOf("five") !== -1 &&
    places.indexOf("eight") !== -1
  ) {
    document.getElementById("win").innerHTML = el + " wins!";
  } else if (
    places.indexOf("three") !== -1 &&
    places.indexOf("six") !== -1 &&
    places.indexOf("nine") !== -1
  ) {
    document.getElementById("win").innerHTML = el + " wins!";
  } else if (
    places.indexOf("one") !== -1 &&
    places.indexOf("two") !== -1 &&
    places.indexOf("three") !== -1
  ) {
    //horizontal
    document.getElementById("win").innerHTML = el + " wins!";
  } else if (
    places.indexOf("four") !== -1 &&
    places.indexOf("five") !== -1 &&
    places.indexOf("six") !== -1
  ) {
    document.getElementById("win").innerHTML = el + " wins!";
  } else if (
    places.indexOf("seven") !== -1 &&
    places.indexOf("eight") !== -1 &&
    places.indexOf("nine") !== -1
  ) {
    document.getElementById("win").innerHTML = el + " wins!";
  } else if (
    places.indexOf("one") !== -1 &&
    places.indexOf("five") !== -1 &&
    places.indexOf("nine") !== -1
  ) {
    //diagonal
    document.getElementById("win").innerHTML = el + " wins!";
  } else if (
    places.indexOf("three") !== -1 &&
    places.indexOf("five") !== -1 &&
    places.indexOf("seven") !== -1
  ) {
    document.getElementById("win").innerHTML = el + " wins!";
  } else if (turnCount == 9) {
    document.getElementById("win").innerHTML = "tie!";
    tieCount++;
    var num = document.getElementById("ties");
    num.textContent = <string>(<unknown>tieCount);
    endTurn();
    return;
  } else {
    return;
  }

  if (el == "x") {
    xCount++;
    var num = document.getElementById("x_win");
    num.textContent = <string>(<unknown>xCount);
  } else if (el == "o") {
    oCount++;
    var num = document.getElementById("o_win");
    num.textContent = <string>(<unknown>oCount);
  }
  endTurn();
}

function endTurn() {
  document.getElementById("turn").innerHTML = "finished!";

  var btns = document.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    (<HTMLElement>btns[i]).setAttribute("disabled", "disabled");
  }

  var total = document.getElementById("total");
  var countTotal = xCount + oCount + tieCount;
  total.textContent = <string>(<unknown>countTotal);
}

function clearGrid() {
  turnCount = 0;
  document.getElementById("count").innerHTML = "0";
  document.getElementById("turn").innerHTML = "o starts";
  document.getElementById("win").innerHTML = "";

  document.getElementById("one").innerHTML = "-";
  document.getElementById("two").innerHTML = "-";
  document.getElementById("three").innerHTML = "-";
  document.getElementById("four").innerHTML = "-";
  document.getElementById("five").innerHTML = "-";
  document.getElementById("six").innerHTML = "-";
  document.getElementById("seven").innerHTML = "-";
  document.getElementById("eight").innerHTML = "-";
  document.getElementById("nine").innerHTML = "-";

  var btns = document.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    (<HTMLElement>btns[i]).removeAttribute("disabled");
    (<HTMLElement>btns[i]).setAttribute("style", "style: white;");
  }

  document.getElementById("starter").setAttribute("style", "display: block;");
  document.getElementById("game").setAttribute("style", "display: none;");
  document.getElementById("restart").setAttribute("style", "display: none;");

  starterArr = [];
  nonStartArr = [];
}
