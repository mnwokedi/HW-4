const keyboardInput = (e) => {
  keyed = String.fromCharCode(e.keyCode);
  keyed = keyed.toLowerCase();
  // if keyed is i lower case
  if (keyed === "i") {
    //alert("pressed i")
    txt = document.getElementById("balloon");
    style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
    currentSize = parseFloat(style);
    //this.alert(currentSize)
    if (currentSize >= 60) {
      balloon.innerHTML = String.fromCodePoint(0x1f4a5);
      document.removeEventListener("keyup", keyboardInput);
    } else {
      txt.style.fontSize = currentSize + 10 + "px";
    }
  } else if (keyed === "d") {
    txt = document.getElementById("balloon");
    style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
    currentSize = parseFloat(style);
    if (currentSize <= 0) {
      //this.alert("0")
      balloon.innerHTML = "Done";
      document.removeEventListener("keyup", keyboardInput);
      balloon.style.fontSize = "30px";
    }
    txt.style.fontSize = currentSize - 10 + "px";
  }
};
document.addEventListener("keyup", keyboardInput);
