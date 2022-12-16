function calcInput(input) {
    document.getElementById("eingegebener-term").innerHTML += input;
}

function calcClear() {
    document.getElementById("eingegebener-term").innerHTML = document.getElementById("eingegebener-term").innerHTML.slice(0, -1);
    document.getElementById("ergebnis").innerHTML = "";
}

function calcSolution() {
    let term = document.getElementById("eingegebener-term").innerHTML;

    term = term.replaceAll(',', '.');                  // , mit . ersetzen
    term = term.replaceAll('\u221A' , 'Math.sqrt');    // Wurzelzeichen mit Wurzelfunktion ersetzen
    term = term.replaceAll('\u00D7' , '*');            // Malzeichen mit * ersetzen
    term = term.replaceAll('\u00F7' , '/');            // Divisionszeichen mit / ersetzen
    term = term.replaceAll('\u00B2' , '**2');          // hochgestellte 2 mit **2 ersetzen

    document.getElementById("ergebnis").innerHTML = eval(term);
}

function copySolution() {
    document.getElementById("solutionbox").value = document.getElementById("ergebnis").innerHTML;
}

function checkSolution(aufgabe) {
    let solutionbox = document.getElementById("solutionbox");
    switch (aufgabe) {
        case 'pythagoras1':
            pythagoras1(solutionbox);
            break;
    }
}

function pythagoras1(solutionbox) {
    setAnswerButton(solutionbox, solutionbox.value == 101);
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