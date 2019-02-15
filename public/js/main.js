let btnBlack = document.getElementsByClassName('square2')[0];
let btnWhite = document.getElementsByClassName('square1')[0];
let header = document.getElementsByTagName('header')[0];
let body = document.getElementsByTagName('body')[0];
let nav = document.getElementsByTagName('nav')[0];
let emporium = document.getElementsByClassName('emporium')[0];
let emporiumScroll = document.getElementsByClassName('emporiumScroll')[0];
emporiumScroll.style.display = 'none';

console.log(btnBlack);
console.log(header);
console.log(nav);

// Changer la couleur du background en noir
function changeColor() {
    if (btnBlack) {
        body.style.backgroundColor = 'black';
        nav.classList.remove('bg-light');
        nav.classList.add('bg-fulldark');
    }
}
btnBlack.addEventListener('click', changeColor);


// Changer la couleur du background en blanc
function changeColorWhite() {
    if (btnWhite) {
        body.style.backgroundColor = 'white';
        nav.classList.remove('bg-fulldark');
        nav.classList.add('bg-light');
    }
}

btnWhite.addEventListener('click', changeColorWhite);


// Changer la couleur du texte .change en blanc
function changeColorW() {
let colorChange = document.querySelectorAll('.change');
    for (i = 0; i < colorChange.length; i++) {
        colorChange[i].classList.remove('text-dark');
        colorChange[i].classList.remove('text-secondary');
        colorChange[i].classList.add('text-white');
        emporium.style.color = 'white';
        emporiumScroll.style.color = "white";
    }
}
btnBlack.addEventListener('click', changeColorW);


// Changer la couleur du texte .change en couleur initial
function changeColorD() {
    let colorChange = document.querySelectorAll('.change');
        for (i = 0; i < colorChange.length; i++) {
            colorChange[i].classList.remove('text-white');
            colorChange[i].classList.add('text-dark');
            colorChange[i].classList.add('text-secondary');
            emporium.style.color = 'black';
            emporiumScroll.style.color = 'black';

        }
    }
    btnWhite.addEventListener('click', changeColorD);



    let navB = document.querySelector('#navigation');
    let navTop = nav.offsetTop;
    
    function stickyNavigation() {
      console.log('navTop = ' + navTop);
      console.log('scrollY = ' + window.scrollY);
      
      if (window.scrollY >= navTop) {
          // nav offsetHeight = height of nav
          document.body.style.paddingTop = navB.offsetHeight + 'px';
          document.body.classList.add('fixed-nav');
          emporiumScroll.style.display = '';
      } else {
        document.body.classList.remove('fixed-nav');
        emporiumScroll.style.display = 'none';
        // emporium.classList.remove('pl-3');
        // emporium.classList.add('text-center');
      }
    }
    
    window.addEventListener('scroll', stickyNavigation);


    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
let displayBeforeClick = document.getElementsByClassName('marginSignIn')[0];
let btnConnexion = document.getElementById('myBtn');

function Disparaitre() {
    displayBeforeClick.style.display = 'none';
}
btnConnexion.addEventListener('click',Disparaitre)