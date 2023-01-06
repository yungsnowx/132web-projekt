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

var correctCount = 0;

function checkSolution(aufgabe) {
    switch (aufgabe) {
        case 'pythagoras':
            setAnswerButton(document.getElementById("solutionbox"), document.getElementById("solutionbox").value == 101);
            setAnswerText(1);
            break;
        case 'geometrie':
            setAnswerButton(document.getElementById("solutionbox1"), document.getElementById("solutionbox1").value == 24);
            setAnswerButton(document.getElementById("solutionbox2"), document.getElementById("solutionbox2").value == 8);
            setAnswerButton(document.getElementById("solutionbox3"), document.getElementById("solutionbox3").value == 78.54);
            setAnswerText(3);
            break;
        case 'ohmschesgesetz':
            setAnswerButton(document.getElementById("solutionbox"), document.getElementById("solutionbox").value == 0.12);
            setAnswerText(1);
            break;
        case 'kinematik' :
            setAnswerButton(document.getElementById("solutionbox1"), document.getElementById("solutionbox1").value == 12);
            setAnswerButton(document.getElementById("solutionbox2"), document.getElementById("solutionbox2").value == 3.33);
            setAnswerButton(document.getElementById("solutionbox3"), document.getElementById("solutionbox3").value == 933.33);

            setAnswerRadioButton(document.getElementById("lk-2b-ja"), document.getElementById("lk-2b-nein"), document.getElementById("lk-2b-ja").checked);
            setAnswerText(4);
            break;
    }
}

function setAnswerButton(solutionbox, isRight) {
    if (isRight) {
        solutionbox.style.border = 'solid 2px lawngreen';
        solutionbox.style.backgroundColor = 'rgba(0, 200, 0, 0.2)';
        correctCount++;
    } else {
        solutionbox.style.border = 'solid 2px red';
        solutionbox.style.backgroundColor = 'rgba(200, 0, 0, 0.2)';
    }
}

function setAnswerText(anzAufgaben) {
    let text = document.getElementById("ergebnis-textrueckmeldung");
    switch (anzAufgaben) {
        case 1 :
            if (correctCount == 1) {
                text.innerHTML = "Super! Die richtige antwort!";
                text.style.color = 'green';
            } else {
                text.innerHTML = "Leider nicht richtig. Versuche es nochmal!";
                text.style.color = 'red';
            }
            break;
        case 3 :
            switch(correctCount) {
                case 0 :
                    text.innerHTML = "0/3<br>Du solltest dir die Erklärungen nochmal durchlesen!";
                    text.style.color = 'red';
                    break;
                case 1 :
                    text.innerHTML = "1/3<br>Noch nicht ganz... Weiter üben!";
                    text.style.color = 'orange';
                    break;
                case 2 :
                    text.innerHTML = "2/3<br>Gut! Aber da geht noch mehr!";
                    text.style.color = 'green';
                    break;
                case 3 :
                    text.innerHTML = "3/3<br>Super!";
                    text.style.color = 'green';
                    break;
            }
            break;
        case 4 : 
            switch(correctCount) {
                case 0 :
                    text.innerHTML = "0/4<br>Du solltest dir die Erklärungen nochmal durchlesen!";
                    text.style.color = 'red';
                    break;
                case 1 :
                    text.innerHTML = "1/4<br>Noch nicht ganz... Weiter üben!";
                    text.style.color = 'orange';
                    break;
                case 2 :
                    text.innerHTML = "2/4<br>Ist ausreichend! Aber da geht noch mehr!";
                    text.style.color = 'orange';
                    break;
                case 3 :
                    text.innerHTML = "3/4<br>Gut! Aber knapp an der Perfektion gescheitert!";
                    text.style.color = 'green';
                    break;
                case 4 :
                    text.innerHTML = "4/4<br>Super!";
                    text.style.color = 'green';
                    break;
            }
            break;
    }
    correctCount = 0;
}

function setAnswerRadioButton(radio1, radio2, isRight) {
    if (isRight) {
        radio1.style.accentColor = 'green';
        correctCount++;
    } else {
        radio2.style.accentColor = 'red';
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'de'}, 'google_translate_element');
}