const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const setLamp = document.getElementById('lamp');

function isBroken(){
    return setLamp.src.indexOf ('quebrada') > -1
}

function lampOn(){
    if (!isBroken()){
        setLamp.src = './imgs/ligada.jpg';
        document.body.style.backgroundColor="#FFE135";
        document.querySelector("#titulo").style.backgroundColor="#000000d3";
    }
}

function lampOff(){
    if (!isBroken()){
        setLamp.src = './imgs/desligada.jpg';
        document.body.style.backgroundColor="#000000d3";
        document.querySelector("#titulo").style.backgroundColor="initial";
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

