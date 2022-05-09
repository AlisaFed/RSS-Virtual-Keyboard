import './styles/styles.css';

const keyboardEn = [ 
['<textarea class="Monitor" type = "text"></textarea>'],
[`<div class="row">     
    <button class="button common" id="Backquote">~</button>
    <button class="button common" id="Digit1">1</button>
    <button class="button common" id="Digit2">2</button>
    <button class="button common" id="Digit3">3</button>
    <button class="button common" id="Digit4">4</button>
    <button class="button common" id="Digit5">5</button>
    <button class="button common" id="Digit6">6</button>
    <button class="button common" id="Digit7">7</button>
    <button class="button common" id="Digit8">8</button>
    <button class="button common" id="Digit9">9</button>
    <button class="button common" id="Digit0">0</button>
    <button class="button common" id="Minus">-</button>
    <button class="button common" id="Plus">=</button>
    <button class="button Backspace" id="Backspace">Backspace</button>
    <button class="button Tab" id="Tab">Tab</button>
    <button class="button common" id="LetterQ">q</button>
    <button class="button common" id="LetterW">w</button>
    <button class="button common" id="LetterE">e</button>
    <button class="button common" id="LetterR">r</button>
    <button class="button common" id="LetterT">t</button>
    <button class="button common" id="LetterY">y</button>
    <button class="button common" id="LetterU">u</button>
    <button class="button common" id="LetterI">i</button>
    <button class="button common" id="LetterO">o</button>
    <button class="button common" id="LetterP">p</button>
    <button class="button common" id="leftscobka">[</button>
    <button class="button common" id="rightscobka">]</button>
    <button class="button common" id="palka"> | </button>
    <button class="button Delete" id="Delete">Del</button>
    <button class="button CapsLock" id="CapsLock">CapsLock</button>
    <button class="button common" id="LetterA">a</button>
    <button class="button common" id="LetterS">s</button>
    <button class="button common" id="LetterD">d</button>
    <button class="button common" id="LetterF">f</button>
    <button class="button common" id="LetterG">g</button>
    <button class="button common" id="LetterH">h</button>
    <button class="button common" id="LetterJ">j</button>
    <button class="button common" id="LetterK">k</button>
    <button class="button common" id="LetterL">l</button>
    <button class="button common" id="dvoetoch">;</button>
    <button class="button common" id="kovich">'</button>
    <button class="button Enter" id="Enter">Enter</button>
    <button class="button ShiftLeft" id="ShiftLeft">Shift</button>
    <button class="button common" id="slash1"> / </button>
    <button class="button common" id="LetterZ">z</button>
    <button class="button common" id="LetterX">x</button>
    <button class="button common" id="LetterC">c</button>
    <button class="button common" id="LetterV">v</button>
    <button class="button common" id="LetterB">b</button>
    <button class="button common" id="LetterN">n</button>
    <button class="button common" id="LetterM">m</button>
    <button class="button common" id="zapataya">,</button>
    <button class="button common" id="tochka">.</button>
    <button class="button common" id="slash2"> / </button>
    <button class="button buttonup" id="buttonup"></button>
    <button class="button ShiftRight" id="ShiftRight">Shift</button>
    <button class="button ControlLeft" id="ControlLeft">Ctrl</button>
    <button class="button Win" id="Win">Win</button>
    <button class="button leftAlt" id="leftAlt">Alt</button>
    <button class="button Space" id="Space"></button>
    <button class="button rightAlt" id="rightAlt">Alt</button>
    <button class="button ControlRight" id="ControlRight">Ctrl</button>
    <button class="button buttonleft" id="buttonleft"></button>
    <button class="button buttondown" id="buttondown"></button>
    <button class="button buttonright" id="buttonright"></button>
</div>`]];

function init() {
let out = '';
for (let i = 0; i < keyboardEn.length; i++) {
    out += keyboardEn[i] + String.fromCharCode(keyboardEn[i]) + '</div>';
}
document.querySelector('#keyboard').innerHTML = out;
}
init ();

let button= document.querySelectorAll('.button');
let Backspace= document.querySelector('#Backspace');
let Tab= document.querySelector('#Tab');
let Del= document.querySelector('#Del');
let CapsLock= document.querySelector('#CapsLock');
let Enter= document.querySelector('#Enter');
let leftShift= document.querySelector('#leftShift');
let rightShift= document.querySelector('#rightShift');
let leftCtrl= document.querySelector('#leftCtrl');
let Win= document.querySelector('#Win');
let leftAlt= document.querySelector('#leftAlt');
let Space= document.querySelector('#Space');
let rightAlt= document.querySelector('#rightAlt');
let rightCtrl= document.querySelector('#rightCtrl');
let Monitor = document.querySelector('#Monitor');

for (let i = 0; i<button.length; i++) {
    button[i].setAttribute('buttonname', button[i].innerText);
    button[i].setAttribute('UpperCasename', button[i].innerText.toUpperCase());
}

window.addEventListener('keydown', function(e) {
    for(let i =0; i < button.length; i++) {
        if(e.key== button[i].getAttribute('buttonname') || e.key== button[i].getAttribute('UpperCasename')) {
            button[i].classList.add('active')
        }
        if(e.code == 'Space') {
            Space.classList.add('active'); 
        }
        if(e.code == 'ShiftLeft'){
            ShiftRight.classList.remove('active');
        }
        if(e.code == 'ShiftRight'){
            ShiftLeft.classList.remove('active');
        }
        if(e.code == 'CapsLock') {
            CapsLock.classList.toggle('active');
        }
        if(e.code == 'ControlLeft ctrlKey'){
            ControlRight.classList.remove('active');
        }
        if(e.code == 'ControlRight ctrlKey'){
            ControlLeft.classList.remove('active');
        }
        if(e.code == 'leftAlt'){
            rightAlt.classList.remove('active');
        }
        if(e.code == 'rightAlt'){
            leftAlt.classList.remove('active');
        }        
    }
})

window.addEventListener('keyup', function(e) {
    for(let i =0; i < button.length; i++) {
        if(e.key == button[i].getAttribute('buttonname') || e.key == button[i].getAttribute('UpperCasename')) {
            button[i].classList.remove('active')
            button[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            Space.classList.remove('active');
            Space.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            ShiftRight.classList.remove('active');
            ShiftRight.classList.remove('remove');
        }
        if(e.code == 'ShiftRight') {
            ShiftLeft.classList.remove('active');
            ShiftLeft.classList.remove('remove');
        }
        if(e.code == 'ControlLeft ctrlKey'){
            ControlRight.classList.remove('active');
            ControlRight.classList.remove('remove');
        }
        if(e.code == 'ControlRight ctrlKey'){
            ControlLeft.classList.remove('active');
            ControlLeft.classList.remove('remove');
        }  
        if(e.code == 'leftAlt'){
            rightAlt.classList.remove('active');
            rightAlt.classList.remove('remove');
        }
        if(e.code == 'rightAlt'){
            leftAlt.classList.remove('active');
            leftAlt.classList.remove('remove');
        }                         
        setTimeout(()=> {
            button[i].classList.remove('remove');
        }, 200)
    }
}) 

function funcBack () {
    let Text = document.getElementsByClassName('Monitor').value;
    let x = document.getElementsByClassName('Monitor').value.length;
    let y = 1;
    let z = x-y;
    document.getElementsByClassName('Monitor').value=Text.slice(0,z);
}

for(let i =0; i < button.length; i++) {
    let but = button[i];
    but.addEventListener('click', clickHandler);
}   

function clickHandler(event) {
    console.log (this.innerText);
    event.preventDefault();
    this.classList.add('active'); 
    setTimeout(()=> {
        this.classList.remove('active');
    }, 200)
    Monitor.area.value += this.innerText.value;
}