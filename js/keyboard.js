var keycode;
var key;
var input = document.getElementById('input');

var errors = 0;
var wpm;

var correct = 0;



function changeColor(color, pos) {
    $("#" + pos).css("background-color", color);
}


function keyDown() {
    if (on && seconds > 0) {
        if (input.value.length > 0 && input.value == " ") {
            $("#input").val("");
            changeColor("lightblue", wordPos);
        }
        if (input.value.length > 0 && keycode == 32) {
            if (input.value == currentWord) {
                $("#" + wordPos).css("color", "green");
                letterPos++;
                currentLetter = currentWord.charAt(letterPos);
                correct++;
                console.log("Correct: " + correct);
            } else {
                errors++;
                document.getElementById('errors').innerHTML = "Errors: " + errors;
                $("#" + wordPos).css("color", "red");
            }
            $("#input").val("");
            wordPos++;
            if (wordPos >= 10) {
                for (var i = 0; i < 10; i++) {
                    $("#" + i).css("color", "");
                }
                wordPos = 0;
                changeColor("", 9);
                on = false
                gen();
            }
            currentWord = text[wordPos];
            letterPos = 0;
            currentLetter = currentWord.charAt(letterPos);
            changeColor("", wordPos - 1);
            changeColor("lightblue", wordPos);
        }
    }
}

function keyUp() {
    if (on && seconds > 0) {
        var letters = currentWord.substring(0, input.value.length);

        if (input.value.length > 0 && input.value == " ") {
            $("#input").val("");
            changeColor("lightblue", wordPos);
        }

        if (input.value == letters) {
            changeColor("lightblue", wordPos);
        } else if (input.value != letters && input.value != " " && input.value != "") {
            changeColor("pink", wordPos);
        }

        if (String.fromCharCode(keycode) == currentLetter.toUpperCase() ||
            (String.fromCharCode(keycode) == "Þ" && currentLetter.toUpperCase() == "\'")) {
            letterPos++;
            currentLetter = currentWord.charAt(letterPos);
            correct++;
        }
    }
}



document.addEventListener("keydown", function(e) {
    keycode = e.keyCode;
    key = "." + keycode;
    $(key).css({
        "background-color": "#6d97db",
        "position": "relative",
        "top": "2px",
        "left": "2px",
        "box-shadow": "1px 1px 0px 0px rgba(150,150,150,0)"
    })
    keyDown();
});
document.addEventListener("keyup", function(e) {
    keycode = e.keyCode;
    key = "." + keycode;
    $(key).css({
        "background-color": "#e0e0e0",
        "position": "static",
        "box-shadow": "1px 1px 0px 0px rgba(150,150,150,1)"
    })
    keyUp();
});
