//external JS
function rollDice() {
  //Getting the values for dc and nd from the browser
  let dc = parseInt(document.getElementById("sides").value);
  let nd = parseInt(document.getElementById("number").value);
  let total = 0;

  for (i = 0; i < nd; i++) {
    //rolls the function random the times that the user has choosen
    let rolling = random(dc);
    //Adds the result to the total variable to keep count on the result
    total += rolling;
    //change the result for each throw into the recpective HTML
    document.getElementById("result" + (i + 1)).innerHTML = rolling;
  }
  document.getElementById("totalResult").innerHTML = total;

  //testing
  if (random(dc) < 1 || random(dc) > dc) throw Error("test #1 failed");
  if (random(4) < 1 || random(4) > 4) throw Error("test #1 failed");
  if (random(6) < 1 || random(6) > 6) throw Error("test #1 failed");
  if (random(8) < 1 || random(8) > 8) throw Error("test #1 failed");
  if (random(10) < 1 || random(10) > 10) throw Error("test #1 failed");
  console.log("test done!");
}

//In this function dc stands for "number of faces"
function random(dc) {
  //calculates a random number between 1 and the number of faces (dc)
  return Math.floor(Math.random() * dc) + 1;
}