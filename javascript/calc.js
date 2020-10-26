let input = "";

let buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", showValue);
}

let clear = document.getElementById("reset");
clear.addEventListener("click", reset);

let skip = document.getElementById("remove");
skip.addEventListener("click", remove);

let equal = document.getElementById("result");
equal.addEventListener("click", domaths);

function showValue() {
  input = input + this.value;
  document.getElementById("output").innerHTML = input;
}

function domaths() {
  document.getElementById("output").innerHTML = eval(input);
  input = eval(input);
}

function reset() {
  document.getElementById("output").innerHTML = " ";
  input = "";
}

function remove() {
  input = input.replace(input.slice(-1), "");
  document.getElementById("output").innerHTML = input;
}

//Add keyboard input
$(document).keyup(function (event) {
  let keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode === 97) {
    $("#one").click();
  } else if (keycode === 98) {
    $("#two").click();
  } else if (keycode === 99) {
    $("#three").click();
  } else if (keycode === 100) {
    $("#four").click();
  } else if (keycode === 101) {
    $("#five").click();
  } else if (keycode === 102) {
    $("#six").click();
  } else if (keycode === 103) {
    $("#seven").click();
  } else if (keycode === 104) {
    $("#eight").click();
  } else if (keycode === 105) {
    $("#nine").click();
  } else if (keycode === 96) {
    $("#zero").click();
  } else if (keycode === 110) {
    $("#decimal").click();
  } else if (keycode === 107) {
    $("#plus").click()
  } else if (keycode === 109) {
    $("#minus").click()
  } else if (keycode === 106) {
    $("#multiplication").click()
  } else if (keycode === 111) {
    $("#division").click()
  } else if (keycode === 67) {
    $("#reset").click()
  }else if (keycode === 8) {
    $("#remove").click()
  }else if (keycode === 13) {
    $("#result").click()
  }
});
