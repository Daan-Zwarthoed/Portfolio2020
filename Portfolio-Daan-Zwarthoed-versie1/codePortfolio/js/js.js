
// begin variablen di eik nodig heb
var html= document.querySelector('.html');
var css= document.querySelector('.css');
var js= document.querySelector('.js');

var htmlZelf= document.querySelector('.htmlZelf');
var cssZelf= document.querySelector('.cssZelf');
var jsZelf= document.querySelector('.jsZelf');
var zelfArray = [htmlZelf, cssZelf, jsZelf];

// einde variablen die ik nodig heb

// begin de functie om de html css of js te laten zien

function hidden(gekozen){
  for (var i = 0; i < zelfArray.length; i++) {
    zelfArray[i].classList.remove('hidden');
  }
if (gekozen == 'html') {

    html.classList.add('actief');
  cssZelf.classList.add('hidden');
  jsZelf.classList.add('hidden');

}else if(gekozen == 'css') {
  css.classList.add('actief');
  htmlZelf.classList.add('hidden');
  jsZelf.classList.add('hidden');

}else if (gekozen == 'js') {
  js.classList.add('actief');
  htmlZelf.classList.add('hidden');
  cssZelf.classList.add('hidden');
}

}

// einde de functie om de html css of js te laten zien

// begin eventlisteners

html.addEventListener('click', function(){
  hidden('html');
});
css.addEventListener('click', function(){
  hidden('css');
});
js.addEventListener('click', function(){
  hidden('js');
});

// einde eventlisteners
