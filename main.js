print("привет");
const button = document.querySelector('.counter');
const upgrade = document.querySelector('.upgrade');
const counterElement = document.getElementById('counter');
const counterElementY = document.getElementById('counterY');
const counterElementX = document.getElementById('counterX');
const win = document.getElementById('win');
let counter = 0;
let lvlupper = 1;
let full = 1;
let fullY = 0;

button.addEventListener('click', () => {
  counter += lvlupper;
  counterElement.innerHTML = `${counter} $`;
  button.disabled = true;
  winer();
setTimeout(() => {
  button.disabled = false;
}, 1000);
});

upgrade.addEventListener('click', () => {
    
    if ( full <= counter) {
        
        counter -= full;
        lvlupper += 1;
        full += 2;
        fullY += 1;
        console.log('удачная покупка!');
    }
    counterElementX.innerHTML = `${full} $`;
    counterElementY.innerHTML = fullY;
    counterElement.innerHTML = `${counter} $`;
    
    
});
function winer () {
  if (counter >= 100) {
    win.innerHTML = `<div> Молодец ты заработал 100$ <br> Спасибо за игру</div>`;
  }
};

function print(a) {
    console.log(a);
};