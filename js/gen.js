
var text = Array();

var wordPos = 0;
var letterPos = 0;
var currentWord;
var currentLetter;
var pastLetters = "";

function gen() {
  text = [];
  var random;

  for (var i = 0; i < 10; i++) {
    random = words[Math.floor(Math.random() * 112)];
    text.push(random);
  }
  currentWord = text[wordPos];
  currentLetter = currentWord.charAt(letterPos);
  document.getElementById('0').innerHTML = text[0];
  document.getElementById('1').innerHTML = text[1];
  document.getElementById('2').innerHTML = text[2];
  document.getElementById('3').innerHTML = text[3];
  document.getElementById('4').innerHTML = text[4];
  document.getElementById('5').innerHTML = text[5];
  document.getElementById('6').innerHTML = text[6];
  document.getElementById('7').innerHTML = text[7];
  document.getElementById('8').innerHTML = text[8];
  document.getElementById('9').innerHTML = text[9];

  $("#" + String(wordPos)).css("background-color", "lightblue");
}
