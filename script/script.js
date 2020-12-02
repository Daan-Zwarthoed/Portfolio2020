
var projectsKopje = document.querySelector('.favorieteProjecten');
var overMijKopje = document.querySelector('.overMij');
var footer = document.querySelector('.gradientFooter');

function scroll(link){
  console.log(link);
  console.log(projectsKopje);
  if(link == 'PROJECTS'){
    projectsKopje.scrollIntoView({
      behavior: 'smooth'
    });
  }else if (link == 'OVER MIJ'){
    overMijKopje.scrollIntoView({
      behavior: 'smooth'
    });
}else if (link == 'CONTACT'){
  footer.scrollIntoView({
    behavior: 'smooth'
  });
}}

function triggerScroll() {
  scroll(this.innerHTML);
}

var t;
function navigatieUpdaten() {

  li = document.querySelectorAll('nav li');
  for (t = 0; t < li.length; t++) {
    result = li[t];
    result.addEventListener('click', triggerScroll);
  }
}
navigatieUpdaten();

// Dit is om naar 1 specifiek project te gaan
var body = document.querySelector('body');

function triggerAnderePagina() {
  body.classList.add('opacityZero');
  var linkNaarProject = this;
  setTimeout(function(){ window.location.href = linkNaarProject.className;}, 1000);
}

var i;
function andereProjectenUpdaten() {

  projecten = document.querySelectorAll('.projectenZelf > div');
  for (i = 0; i < projecten.length; i++) {
    result = projecten[i];
    result.addEventListener('click', triggerAnderePagina);
  }
}
andereProjectenUpdaten();

// Einde naar 1 specifiek project


// Dit is om terug te gaan naar de site

var terugKnop = document.querySelector('.frontEnd nav div, .portfolio nav div, .programmeren nav div, .dezeDivDoetNiks');

function terug(){
  body.classList.add('opacityZero');

  setTimeout(function(){
    window.location.href = "index.html";
    window.history.back();
  }, 1000)

}

terugKnop.addEventListener('click', terug);

// Einde terug naar de site



// Begin dropdown meer meerProjecten

var dropdownZelf = document.querySelector('.meerProjecten, .dezeDivDoetNiks')
var dropdownKnop = document.querySelector('.meerProjecten div, .dezeDivDoetNiks');

function toggleDropdown(){
dropdownZelf.classList.toggle('dropdownActief');
}


dropdownKnop.addEventListener('click', toggleDropdown);


// Einde dropdown meer projecten
