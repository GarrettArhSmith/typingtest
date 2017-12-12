
var keycode;
var key;
var input = document.getElementById('input');


function changeColor(color, pos) {
  $("#" + pos).css("background-color", color);
}


function practice() {
  var letters = currentWord.substring(0, input.value.length);

  if (input.value == letters) {
    changeColor("lightblue", wordPos);
    if (input.value == currentWord) {
      $("#input").val("");
      wordPos++;
      changeColor("", wordPos - 1);
      if (wordPos >= 10) {
        wordPos = 0;
        changeColor("", 9);
        gen();
      }
      currentWord = text[wordPos];
      changeColor("lightblue", wordPos);
    }
  }else if (input.value != letters) {
    changeColor("pink", wordPos);
  }
}



document.addEventListener("keydown", function(e) {
  keycode = e.keyCode;
  key = "." + keycode;
  $(key).css({
    "background-color": "#6d97db",
    "position": "relative",
    "top": "2px", "left": "2px",
    "box-shadow": "1px 1px 0px 0px rgba(150,150,150,0)"
  })
  practice();
});
document.addEventListener("keyup", function(e) {
  keycode = e.keyCode;
  key = "." + keycode;
  $(key).css({
    "background-color": "#ddd",
    "position": "static",
    "box-shadow": "1px 1px 0px 0px rgba(150,150,150,1)"
  })
  practice();
});
