/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//Begin soorten kaarten
var hoeveelheid = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'b', 'v', 'k', 'a'];
var skhr = ['schoppen', 'klavers', 'harten', 'ruiten'];
//Einde soorten kaarten


//Begin soort kaart kiezen
var soortKaart;
var kaarten;
var inhoudMidden;
var midden;

function kaartKiezen() {
    soortKaart = skhr[Math.floor(Math.random() * 4)];
    kaarten = hoeveelheid[Math.floor(Math.random() * 13)];
    return soortKaart + kaarten;

}
//einde soort kaart kiezen

//Begin middelstekaart kiezen
function middenKaartKiezen() {
    midden = document.querySelector('#midden');
    inhoudMidden = kaartKiezen();
    midden.textContent = inhoudMidden;
}
middenKaartKiezen();
//Einde middelste kaart kiezen

//Begin kaarten aan de spelers geven.
var i;
for (i = 0; i < 5; i++) {
    var BnewEl = document.createElement('li');
    var BnewText = document.createTextNode(kaartKiezen());
    BnewEl.appendChild(BnewText);
    var Bposition = document.getElementsByTagName('ul')[0];
    Bposition.appendChild(BnewEl);
}

for (i = 0; i < 5; i++) {
    var OnewEl = document.createElement('li');
    var OnewText = document.createTextNode(kaartKiezen());
    OnewEl.appendChild(OnewText);
    var Oposition = document.getElementsByTagName('ul')[1];
    Oposition.appendChild(OnewEl);
}
//Einde kaarten aan de spelers geven.


// Dit zijn een paar variablen die je in de beurt gaat gebruiken waarvan je niet wil dat ze veranderen.
var goeieSpeler = document.getElementsByTagName('ul')[0];
var middenTekst = document.querySelector('#feedback');
var speler1 = document.getElementsByTagName('ul')[0];
var speler2 = document.getElementsByTagName('ul')[1];
var gewonnen = document.getElementById('winachtergrond');
var tekstWin = document.getElementById('gewonnen');
var naam1 = 'speler 1';
var naam2 = 'speler 2';
var spelerNaam1 = document.querySelector('h3');
var spelerNaam2 = document.getElementsByTagName('h3')[2];

//Met deze functie speel je de beurt
function beurt(inhoudKaart, kaartKlik) {

    //Dit checkt of je de gene aan de beurt is speelt.
    var welkeSpeler = kaartKlik.parentNode;
    if (welkeSpeler == goeieSpeler) {

        //Dit checkt of de kaart overeenkomt met het midden
        var eindeKaart = inhoudKaart.length - 1;
        var eindeMidden = inhoudMidden.length - 1;
        if (inhoudKaart[0] == inhoudMidden[0] || inhoudKaart[eindeKaart] == inhoudMidden[eindeMidden]) {

            //Dit zet de kaart die je speelt in het midden en haalt hem weg.
            inhoudMidden = inhoudKaart;
            midden.textContent = inhoudKaart;

            kaartKlik.parentNode.removeChild(kaartKlik);
            if (speler1.childElementCount === 0 || speler2.childElementCount === 0) {
                gewonnen.classList.remove('hidden');
                if (goeieSpeler == speler1) {

                    tekstWin.textContent = naam1 + ' heeft gewonnen!';
                } else {
                    tekstWin.textContent = naam2 + ' heeft gewonnen';
                }


            }


            //Dit is om te zorgen dat elke keer de andere speler aan de beurt is
            if (goeieSpeler == speler1) {
                goeieSpeler = document.getElementsByTagName('ul')[1];
                middenTekst.textContent = naam2 + ' is aan de beurt';
            } else {
                goeieSpeler = document.getElementsByTagName('ul')[0];
                middenTekst.textContent = naam1 + ' is aan de beurt';
            }


            // dit gebeurt er als de kaart niet matcht met het midden
        } else {
            middenTekst.textContent = 'Geen matchende kaart';
        }
        //dit gebeurt er als de verkeerde speler speelt
    } else {
        middenTekst.textContent = 'Niet aan de beurt';

    }
}
//Einde functie om je beurt te stelen


//Dit is de functie om een nieuwe kaart te pakken.
function extraKaart() {
    if (goeieSpeler == speler1) {
        var BnewEl = document.createElement('li');
        var BnewText = document.createTextNode(kaartKiezen());
        BnewEl.appendChild(BnewText);
        var Bposition = document.getElementsByTagName('ul')[0];
        Bposition.appendChild(BnewEl);

        goeieSpeler = document.getElementsByTagName('ul')[1];
        middenTekst.textContent = naam2 + ' is aan de beurt';

    } else {
        var OnewEl = document.createElement('li');
        var OnewText = document.createTextNode(kaartKiezen());
        OnewEl.appendChild(OnewText);
        var Oposition = document.getElementsByTagName('ul')[1];
        Oposition.appendChild(OnewEl);

        goeieSpeler = document.getElementsByTagName('ul')[0];
        middenTekst.textContent = naam1 + ' is aan de beurt';

    }
    hoeveelheidUpdaten();
}

//Dit detecteert op welke kaart je klikt en wanneer.
function spelen() {
    beurt(this.innerHTML, this);
}
var t;
var li = document.querySelectorAll('li'),
    result;
function hoeveelheidUpdaten() {

    li = document.querySelectorAll('li');
    for (t = 0; t < li.length; t++) {
        result = li[t];
        result.addEventListener('click', spelen);
    }

}
hoeveelheidUpdaten();


//Dit is de event listener voor het pakken van een kaart.
var kaartPakken = document.querySelector('#kaartpakken');
kaartPakken.addEventListener('click', extraKaart, false);

//Begin namen invullen
var formulier = document.querySelector('form');

//Dit wordt er uitgevoerd als je het formulier activeert
function namenInvullen(event) {
    event.preventDefault();
    formulier.classList.add('hidden');
    var input1 = document.formulier.speler1.value;
    if (input1 !== '') {
        spelerNaam1.textContent = input1;
        naam1 = input1;
    }
    var input2 = document.formulier.speler2.value;
    if (input2 !== '') {
        spelerNaam2.textContent = input2;
        naam2 = input2;
    }

}


//Dit is de eventlistener voor het formulier
formulier.addEventListener('submit', namenInvullen);


