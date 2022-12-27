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
    switch (aufgabe) {
        case 'pythagoras1':
            setAnswerButton(document.getElementById("solutionbox"), document.getElementById("solutionbox").value == 101);
            break;
        case 'geometrie':
            setAnswerButton(document.getElementById("solutionbox1"), document.getElementById("solutionbox1").value == 24);
            setAnswerButton(document.getElementById("solutionbox2"), document.getElementById("solutionbox2").value == 8);
            setAnswerButton(document.getElementById("solutionbox3"), document.getElementById("solutionbox3").value == 78.5);
            break;
        case 'ohmschesgesetz':
            setAnswerButton(document.getElementById("solutionbox"), document.getElementById("solutionbox").value == 0.12)
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