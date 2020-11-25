
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

var terugKnop = document.querySelector('.frontEnd nav div, .portfolio nav div, .programmeren nav div, .dezeDivDoetNiks');

function terug(){
window.history.back()
}

terugKnop.addEventListener('click', terug);
