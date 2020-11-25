/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//Dit zijn de variables die ik nodig heb in dit ontwerp.
var stap = 'boven-of-beneden';
var video = document.querySelector('video');
var knop1 = document.querySelector('.knop1');
var knop2 = document.querySelector('.knop2');
var videoofniet = 0;
var filmpje;

var startKnop = document.querySelector('.startKnop');
var intro = document.querySelector('.intro');

//Dit is om het starttekstje te laten werken.
function start() {
    intro.classList.add('hidden');
    startKnop.classList.add('hidden');
    video.classList.remove('hidden');

    filmpje = document.createElement('source');
    filmpje.src = 'videos/1+2.mp4';
    filmpje.type = 'video/mp4';
    video.appendChild(filmpje);
    video.play();
}
startKnop.addEventListener('click', start);


//Dit gebeurt er als je dood gaat in het verhaal
var dood = document.querySelector('.doodgaan');
var doodgaanKnop = document.querySelector('.doodgaanKnop');

function doodgaan() {
    video.classList.add('hidden');
    dood.classList.remove('hidden');
}

function herladen() {
    location.reload();
}
doodgaanKnop.addEventListener('click', herladen);



//Dit is om de knoppen te laten zien als het filmpje eidnigt of weghalen als een filmpje start.
function omschakelen() {
    if (stap == "dood") {
        doodgaan();
    } else if (videoofniet == 1) {
        knop1.classList.add('hidden');
        knop2.classList.add('hidden');
        videoofniet = 0;

    } else {
        knop1.classList.remove('hidden');
        knop2.classList.remove('hidden');
        videoofniet = 1;
    }
}

//Dit is er als wij een gedeelte van het verhaal niet hebben uitgewerkt
var errorofniet = 1;
var error = document.querySelector('.nietUitgewerkt');
var errorKnop = document.querySelector('.errorKnop');

function nietUitgewerkt() {
    if (errorofniet == 1) {
        error.classList.remove('hidden');
        errorofniet = 0;

    } else {
        error.classList.add('hidden');
        errorofniet = 1;
    }
}

errorKnop.addEventListener('click', nietUitgewerkt);


//Dit gebeurt er als we het wel hebben uitgewerkt.

function welUitgewerkt() {
    omschakelen();
    filmpje.removeAttribute('src');
    video.load();
    filmpje = document.createElement('source');

     if (stap == "boven-of-beneden") {
        filmpje.src = 'videos/3+4.mp4';
        stap = 'naar-binnen-of-niet';
        knop1.textContent = 'Ga terug. W.I.P';
        knop2.textContent = 'Ga naar binnen.';


    } else if (stap == "naar-binnen-of-niet") {
        filmpje.src = 'videos/5+6.mp4';
        stap = 'zwaard-of-pistool';
        knop1.textContent = 'Pak het zwaard.';
        knop2.textContent = 'Pak het pistool. W.I.P';


    } else if (stap == "zwaard-of-pistool") {
        filmpje.src = 'videos/7+8.mp4';
        stap = 'terug-of-naar-rechts';
        knop1.textContent = 'Zoek verder. W.I.P';
        knop2.textContent = 'Ga naar links';

        } else if (stap == "terug-of-naar-rechts") {
        filmpje.src = 'videos/9+10.mp4';
        stap = 'boven-of-beneden-zwaard';
        knop1.textContent = 'Zoek boven verder. W.I.P';
        knop2.textContent = 'Ga naar beneden';

    } else if (stap == "boven-of-beneden-zwaard") {
        filmpje.src = 'videos/11+12.mp4';
        stap = 'steken-of-stilstaan';
        knop1.textContent = 'Val het aan!';
        knop2.textContent = 'Blijf stilstaan. W.I.P';


    } else if (stap == "steken-of-stilstaan") {
        filmpje.src = 'videos/13.mp4';
        stap = 'dood';
    }

    filmpje.type = 'video/mp4';
    video.appendChild(filmpje);
    video.play();
}

//Dit is om het goede filmpje te starten elke keer als je een keuze maakt.

function play(keuze) {

    if (stap == 'boven-of-beneden') {
        if (keuze == 'keuze1') {
            //blijf boven
            welUitgewerkt();
        } else {
            //naar beneden
            nietUitgewerkt();
        }


    } else if (stap == 'naar-binnen-of-niet') {
        if (keuze == 'keuze1') {
            //ga terug
            nietUitgewerkt();
        } else {
            //naar binnen
            welUitgewerkt();
        }


    } else if (stap == 'zwaard-of-pistool') {
        if (keuze == 'keuze1') {
            //Pak het zwaard
            welUitgewerkt();
        } else {
            //Pak het pistool
            nietUitgewerkt();
        }
        
} else if (stap == 'terug-of-naar-rechts') {
        if (keuze == 'keuze1') {
            //Ga naar rechts
            nietUitgewerkt();
        } else {
            //Ga terug naar links
            welUitgewerkt();
        }
        
    } else if (stap == 'boven-of-beneden-zwaard') {
        if (keuze == 'keuze1') {
            //Pak het zwaard
            nietUitgewerkt();
        } else {
            //Pak het pistool
            welUitgewerkt();
        }

    } else if (stap == 'steken-of-stilstaan') {
        if (keuze == 'keuze1') {
            //val aan
            welUitgewerkt();
        } else {
            //sta stil
            nietUitgewerkt();
        }


    }
}
video.onended = omschakelen;
knop1.addEventListener('click', function () {
    play('keuze1');
});
knop2.addEventListener('click', function () {
    play('keuze2');
});


var pauzeOfNiet = 'speelt';
function keyKeuze(keyName){
    
    console.log(keyName);
    
    if (keyName === 'p') {
    if(pauzeOfNiet == 'speelt'){
    video.pause();
        pauzeOfNiet = 'pauze';
    } else {
    video.play();
        pauzeOfNiet = 'speelt';
    }
    
  }else if (keyName === 'Enter') {
video.currentTime = video.duration;
      
      
}else if (keyName === '1') {
play('keuze1');
    
    
}else if (keyName === '2') {
play('keuze2');
    
    
}else if (keyName === 'ArrowLeft') {
video.currentTime = video.currentTime - 5;
    
    
}else if (keyName === 'ArrowRight') {
video.currentTime = video.currentTime + 5;
}
    
}
 
document.addEventListener('keydown', function(){
keyKeuze(event.key);
});


