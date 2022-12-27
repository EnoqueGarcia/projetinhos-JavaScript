let TurnOn = document.getElementById('turnOn')
let TurnOff = document.getElementById('turnOff')
let lamp = document.getElementById('lamp')



function IsLampBroken () {
  return lamp.src.indexOf ( 'quebrada' ) > -1
  
  
}

function LampOn() {
  if(!IsLampBroken()){
  lamp.src = "Imagens/ligada.jpg"}
  const audio = new Audio('interruptor som.mp3')
audio.play();
  
}

function LampOff (){
  if(!IsLampBroken()){
lamp.src = "Imagens/desligada.jpg"}
const audio = new Audio('interruptor som.mp3')
audio.play();
  
}

function lampBroken (){
  lamp.src = "Imagens/quebrada.jpg"
  const audio = new Audio('quebrando.mp3')
  audio.play();
return
} 




TurnOn.addEventListener( 'click', LampOn )
TurnOff.addEventListener('click', LampOff)
lamp.addEventListener('dblclick', lampBroken)















