const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const setLamp = document.getElementById('lamp');

function isBroken(){
    return setLamp.src.indexOf ('quebrada') > -1
}

function lampOn(){
    if (!isBroken()){
        setLamp.src = './imgs/ligada.jpg';
    }
}

function lampOff(){
    if (!isBroken()){
        setLamp.src = './imgs/desligada.jpg';
    }
}

function LampBroken(){
        setLamp.src = './imgs/quebrada.jpg'
}

ligar.addEventListener('click', lampOn);
desligar.addEventListener('click',lampOff);
setLamp.addEventListener('mouseover',lampOn);
setLamp.addEventListener('mouseout',lampOff);
setLamp.addEventListener('dblclick',LampBroken)

