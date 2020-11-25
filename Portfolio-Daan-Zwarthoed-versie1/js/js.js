/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

// Start variablen nodig
var overMij = document.querySelector('.overMij');
var MijnWerk = document.querySelector('.MijnWerk');
var goals = document.querySelector('.goals')
var contact = document.querySelector('.contact');

var linkOverMij = document.querySelector('.linkOverMij');
var linkMijnWerk = document.querySelector('.linkMijnWerk');
var linkGoals = document.querySelector('.linkGoals');
var linkContact = document.querySelector('.linkContact');

var currentPage = linkOverMij;
var i;
var k;
var a;
var e;
var goDown = document.querySelector('.goDown');

var navigatie = document.querySelector('.navigatie');
var kleurenArray = ['kleurOverMij', 'kleurMijnWerk', 'kleurGoals', 'kleurContact'];
var veranderenArray = [linkOverMij, linkMijnWerk, linkGoals, linkContact];
var gekozenKleurHeader;

var scrollMijnWerk= MijnWerk.getBoundingClientRect().top + window.scrollY;
var scrollGoals = goals.getBoundingClientRect().top + window.scrollY;
var scrollContact = contact.getBoundingClientRect().top + window.scrollY;

var windowHeight = window.innerHeight;

var header = document.querySelector('header');
var footer = document.querySelector('footer');
var body= document.querySelector('body');
var achtergrondKleurArray = ['achtergrondKleurOverMij', 'achtergrondKleurMijnWerk', 'achtergrondKleurGoals', 'achtergrondKleurContact'];
var achtergrondVeranderenArray = [header, body];
var gekozenAchtergrondKleurHeader;
// Einde variablen nodig

// Start pagina updaten
function updatePage() {
  currentPage.classList.remove('actief')

  for (k = 0; k < kleurenArray.length + 1; k++) {
    goDown.classList.remove(kleurenArray[k]);
    linkOverMij.classList.remove(kleurenArray[k]);
    linkMijnWerk.classList.remove(kleurenArray[k]);
    linkGoals.classList.remove(kleurenArray[k]);
    linkContact.classList.remove(kleurenArray[k]);
  }

  for (a = 0; a <= achtergrondVeranderenArray.length + 1; a++) {
   header.classList.remove(achtergrondKleurArray[a]);
   footer.classList.remove(achtergrondKleurArray[a]);
   body.classList.remove(achtergrondKleurArray[a]);
  }

// veranderen top
  if (scrollY < scrollMijnWerk) {
    currentPage = linkOverMij;
    gekozenKleurHeader = 'kleurOverMij'
    gekozenAchtergrondKleurHeader = 'achtergrondKleurOverMij';

  } else if (scrollY < scrollGoals) {
    currentPage = linkMijnWerk
    gekozenKleurHeader = 'kleurMijnWerk'
    gekozenAchtergrondKleurHeader = 'achtergrondKleurMijnWerk';

  } else if (scrollY < scrollContact) {
    currentPage = linkGoals;
    gekozenKleurHeader = 'kleurGoals'
    gekozenAchtergrondKleurHeader = 'achtergrondKleurGoals';


  } else {
    currentPage = linkContact;
    gekozenKleurHeader = 'kleurContact'
    gekozenAchtergrondKleurHeader = 'achtergrondKleurContact';
  }
console.log(footer);
// Veranderen bodem
  if (scrollY + windowHeight <= scrollMijnWerk) {

    goDown.classList.add('kleurOverMij');
    footer.classList.add('achtergrondKleurOverMij');
    goDown.innerHTML = 'Go down';

  } else if (scrollY + windowHeight <= scrollGoals) {
    goDown.classList.add('kleurMijnWerk');
    footer.classList.add('achtergrondKleurMijnWerk');
    goDown.innerHTML = 'Go down';

  } else if (scrollY + windowHeight <= scrollContact) {
    goDown.classList.add('kleurGoals');
    footer.classList.add('achtergrondKleurGoals');
    goDown.innerHTML = 'Go down';


  } else {
    goDown.classList.add('kleurContact') ;
    footer.classList.add('achtergrondKleurContact') ;
    goDown.innerHTML = 'To top';
  }

  for (var i = 0; i < veranderenArray.length; i++) {
    veranderenArray[i].classList.add(gekozenKleurHeader)
  }
  for (var e = 0; e < achtergrondVeranderenArray.length; e++) {
    achtergrondVeranderenArray[e].classList.add(gekozenAchtergrondKleurHeader)
  }
  currentPage.classList.add('actief');
}
updatePage();
window.addEventListener('scroll', updatePage);
// Einde pagina updaten


// Begin scrollen met knopjes bovenin
function scroll(link) {
    if (link.classList[0] == 'linkOverMij') {
      overMij.scrollIntoView({
        behavior: 'smooth'
      });
    } else if (link.classList[0] == 'linkMijnWerk') {
      MijnWerk.scrollIntoView({
        behavior: 'smooth'
      });
    } else if (link.classList[0] == 'linkGoals') {
      goals.scrollIntoView({
        behavior: 'smooth'
      });
    } else if (link.classList[0] == 'linkContact') {
      contact.scrollIntoView({
        behavior: 'smooth'
      });
  }
  updatePage();

}

function triggerScroll() {
  scroll(this);
}
var t;


function navigatieUpdaten() {

  li = document.querySelectorAll('li');
  for (t = 0; t < li.length; t++) {
    result = li[t];
    result.addEventListener('click', triggerScroll);
  }

}
navigatieUpdaten();

// Einde scrollen met knopjes bovenin


// Begin pagedown onderin
function pageDown(page) {
  if (page.classList[0] == 'linkOverMij') {
    MijnWerk.scrollIntoView({
      behavior: 'smooth'
    });
  } else if (page.classList[0] == 'linkMijnWerk') {
    goals.scrollIntoView({
      behavior: 'smooth'
    });
  } else if (page.classList[0] == 'linkGoals') {
    contact.scrollIntoView({
      behavior: 'smooth'
    });
  } else if (page.classList[0] == 'linkContact') {
    overMij.scrollIntoView({
      behavior: 'smooth'
    });
  }
  updatePage();
}

goDown.addEventListener('click', function() {
  pageDown(currentPage);
})

// Einde pagedown onderin
