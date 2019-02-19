let btnBlack = document.getElementsByClassName('square2')[0];
let btnWhite = document.getElementsByClassName('square1')[0];
let header = document.getElementsByTagName('header')[0];
let body = document.getElementsByTagName('body')[0];
let nav = document.getElementsByTagName('nav')[0];
let emporium = document.getElementsByClassName('emporium')[0];
let emporiumScroll = document.getElementsByClassName('emporiumScroll')[0];
let register = document.getElementsByClassName('register')[0];
let btnRegister = document.getElementsByClassName('registerAccount')[0];
let btnConnexion = document.getElementsByClassName('ok')[0];
let signIn = document.getElementsByClassName('connexion')[0];
let createAccount = document.getElementsByClassName('createAccount')[0];
let repUsers = document.getElementById('first_name');
let btnConnect = document.getElementById('myBtnConnect');
let off = document.getElementsByClassName('fa-power-off')[0];
off.style.display = 'none';
btnConnect.style.display = 'none'
register.style.display = 'none';
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
            emporium.style.color = 'black';
            emporiumScroll.style.color = 'black';

        }
    }
    btnWhite.addEventListener('click', changeColorD);



    let navB = document.querySelector('#navigation');
    let navTop = nav.offsetTop;
    let square1 = document.getElementsByClassName('square1')[0];   
 let square2 = document.getElementsByClassName('square2')[0];
    
    function stickyNavigation() {
      console.log('navTop = ' + navTop);
      console.log('scrollY = ' + window.scrollY);
      
      if (window.scrollY >= navTop) {
          // nav offsetHeight = height of nav
          document.body.style.paddingTop = navB.offsetHeight + 'px';
          square1.style.display = 'none';
          square2.style.display = 'none';
          btn.style.display = 'none';
          document.body.classList.add('fixed-nav');
          emporiumScroll.style.display = '';
      } else {
        document.body.classList.remove('fixed-nav');
        emporiumScroll.style.display = 'none';
        square1.style.display = '';
        square2.style.display = '';
        btn.style.display = '';
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


function create() {
  if (createAccount) {
    register.style.display = '';
  signIn.style.display = 'none';
  }
}
createAccount.addEventListener('click', create);

function registerOk() {
    if (btnRegister) {
      signIn.style.display = '';
      register.style.display = 'none';
    }
}
btnRegister.addEventListener('click', registerOk);


function connexion() {
  if (btnConnexion) {
    btn.style.display = 'none'
    event.preventDefault();
    modal.style.display = 'none'    
    btnConnect.style.display = '';
    btnConnect.innerHTML = repUsers.value + ` <i class="fas fa-user"></i>`
    off.style.display = '';
    
}
}
btnConnexion.addEventListener('click', connexion);


function deco() {
  if (off) {
    btn.style.display = ''
    off.style.display = 'none';
    btnConnect.style.display = 'none'
  }
}
off.addEventListener('click', deco);


// let prev = document.getElementsByClassName('prev')[0];
// let next = document.getElementsByClassName('next')[0];
// let imgCarousel = document.querySelectorAll('#carouselExampleIndicators img')
// console.log(next);


// function oneOne() {
//   if (next) {
    
//   } 
// }
// next.addEventListener('click', oneOne)



// function slide3() {
//     slideDiv.style.transform = 'translateX(-14.28%)';
//     slideDiv.style.transition = 'all 1s ease';
//     event.preventDefault()
// }
// test1[1].addEventListener('click', slide3)

// function slide2() {
//     slideDiv.style.transform = 'translateX(-28.56%)';
//     slideDiv.style.transition = 'all is ease';
//     event.preventDefault()
// }
// test1[2].addEventListener('click', slide2);

let buttons0 = document.getElementsByClassName('buttons0')[0];
let buttons1 = document.getElementsByClassName('buttons1')[0];
let buttons2 = document.getElementsByClassName('buttons2')[0];
let buttons3 = document.getElementsByClassName('buttons3')[0];
let buttons4 = document.getElementsByClassName('buttons4')[0];
let buttons5 = document.getElementsByClassName('buttons5')[0];
let buttons6 = document.getElementsByClassName('buttons6')[0];

let slideDiv = document.getElementsByClassName('slide')[0];
let colMza = document.querySelectorAll(".col > img")

function slide(event) {
  console.dir(event.currentTarget.dataset.position);
  let pos = event.currentTarget.dataset.position;
  slideDiv.style.transform = 'translateX(' + -14.28 * pos + '%)'
  // slideDiv.style.transform = `translateX( ${-14.28 * pos}%)`
  slideDiv.style.transition = 'all 1s ease'
    event.preventDefault()
}

buttons0.addEventListener('click', slide);
buttons1.addEventListener('click', slide);
buttons2.addEventListener('click', slide);
buttons3.addEventListener('click', slide);
buttons4.addEventListener('click', slide);
buttons5.addEventListener('click', slide);
buttons6.addEventListener('click', slide);
buttons7.addEventListener('click', slide);
