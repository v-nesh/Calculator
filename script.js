const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let display = display.innerText.toString();
      display.innerText = String.substr(0, string.length - 1);
    } else if (item.id != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if ((item.id == "") & (item.id == "equal")) {
      display.innerHTML = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});
