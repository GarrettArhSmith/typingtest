var on = false;

var text = Array();

var wordPos = 0;
var letterPos = 0;
var currentWord;
var currentLetter;
var pastLetters = "";

function gen() {
    if (on == false) {
        on = true;
        text = [];
        var random;

        for (var i = 0; i < 10; i++) {
            random = words[Math.floor(Math.random() * 112)];
            text.push(random);
        }
        currentWord = text[wordPos];
        currentLetter = currentWord.charAt(letterPos);
        for (var i = 0; i < 10; i++) {
            document.getElementById(i).innerHTML = text[i];
        }


        changeColor("lightblue", wordPos);
    }
}
