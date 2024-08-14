function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

function chBackcolor(color) {
    document.getElementById("div1").style.backgroundColor= randomColors();
 }