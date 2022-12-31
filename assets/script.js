function calcInput(input) {
    document.getElementById("eingegebener-term").innerHTML += input;
}

function calcClear() {
    document.getElementById("eingegebener-term").innerHTML = document.getElementById("eingegebener-term").innerHTML.slice(0, -1);
    document.getElementById("ergebnis").innerHTML = "";
}

document.getElementById("tr-clear").ondblclick = function() {
    document.getElementById("eingegebener-term").innerHTML = "";
    document.getElementById("ergebnis").innerHTML = "";
}

function calcSolution() {
    let term = document.getElementById("eingegebener-term").innerHTML;

    term = term.replaceAll(',', '.');                  // , mit . ersetzen
    term = term.replaceAll('\u221A' , 'Math.sqrt');    // Wurzelzeichen mit Wurzelfunktion ersetzen
    term = term.replaceAll('\u00D7' , '*');            // Malzeichen mit * ersetzen
    term = term.replaceAll('\u00F7' , '/');            // Divisionszeichen mit / ersetzen
    term = term.replaceAll('\u00B2' , '**2');          // hochgestellte 2 mit **2 ersetzen
    term = term.replaceAll('\u03C0', 3.14159);           // pi-zeichen mit 3.14159 ersetzen

    document.getElementById("ergebnis").innerHTML = (eval(term)).toFixed(2);
}

function copySolution() {
    document.getElementById("solutionbox").value = document.getElementById("ergebnis").innerHTML;
}

function copyMultipleSolutions() {
    let box1 = document.getElementById("solutionbox1").value;
    let box2 = document.getElementById("solutionbox2").value;
    let box3 = document.getElementById("solutionbox3").value;

    if (box1 == "") {
        document.getElementById("solutionbox1").value = document.getElementById("ergebnis").innerHTML;
    } else if (box2 == ""){
        document.getElementById("solutionbox2").value = document.getElementById("ergebnis").innerHTML;
    } else if (box3 == ""){
        document.getElementById("solutionbox3").value = document.getElementById("ergebnis").innerHTML;
    }
}

function checkSolution(aufgabe) {
    switch (aufgabe) {
        case 'pythagoras1':
            setAnswerButton(document.getElementById("solutionbox"), document.getElementById("solutionbox").value == 101);
            break;
        case 'geometrie':
            setAnswerButton(document.getElementById("solutionbox1"), document.getElementById("solutionbox1").value == 24);
            setAnswerButton(document.getElementById("solutionbox2"), document.getElementById("solutionbox2").value == 8);
            setAnswerButton(document.getElementById("solutionbox3"), document.getElementById("solutionbox3").value == 78.54);
            break;
        case 'ohmschesgesetz':
            setAnswerButton(document.getElementById("solutionbox"), document.getElementById("solutionbox").value == 0.12);
            break;
        case 'kinematik' :
            setAnswerButton(document.getElementById("solutionbox1"), document.getElementById("solutionbox1").value == 12);
            setAnswerButton(document.getElementById("solutionbox2"), document.getElementById("solutionbox2").value == 3.33);
            setAnswerButton(document.getElementById("solutionbox3"), document.getElementById("solutionbox3").value == 933.33);

            setAnswerRadioButton(document.getElementById("lk-2b-ja"), document.getElementById("lk-2b-nein"), document.getElementById("lk-2b-ja").checked);

            break;
    }
}

function setAnswerButton(solutionbox, isRight) {
    if (isRight) {
        solutionbox.style.border = 'solid 2px lawngreen';
        solutionbox.style.backgroundColor = 'rgba(0, 200, 0, 0.2)';
    } else {
        solutionbox.style.border = 'solid 2px red';
        solutionbox.style.backgroundColor = 'rgba(200, 0, 0, 0.2)';
    }
}

function setAnswerRadioButton(radio1, radio2, isRight) {
    if (isRight) {
        radio1.style.accentColor = 'green';
    } else {
        radio2.style.accentColor = 'red';
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'de'}, 'google_translate_element');
}