let button = document.getElementsByClassName("buttons");
console.log(button);

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", showValue);
}

let reset = document.getElementsByClassName("clear");
reset.addEventListener("click", remove);

let equal = document.getElementsByClassName("egal");
equal.addEventListener("click", doMath);

function showValue() {
  input = input + this.value;
  document.getElementsByClassName("answer").innerHTML = input;
}

function doMath() {
  document.getElementsByClassName("answer").innerHTML = eval(input);
}

function remove() {
  document.getElementsByClassName("answer").innerHTML = "Wanna try again ?";
  input = "";
}
