
const player1={
  name: 'RYU',
  health: 100,
  normal:"ryu.gif",
  attack: "ryuatack.gif"
}

const player2={
  name: 'terry',
  health: 100,
  normal:"terry.gif",
  attack: "terryatack.gif"
}

document.getElementById("myBtn").addEventListener("click",attack);
document.getElementById("myBtn2").addEventListener("click",attack2);

function attack(){
  var health1 = document.getElementById("player1");
  var delay = 2000;
  var image = document.getElementById("ryu");
  if(player2.health > 0)
      player2.health -= 20;
    health1.textContent = player2.health.toString(); 
  image.src= player1.attack;
    setTimeout(() => {
      image.src= player1.normal;
    }, delay);
}

function attack2(){
  var health2 = document.getElementById("player2");
  var delay = 2000;
  var image = document.getElementById("terry");
  if(player1.health > 0)
      player1.health -= 20;
    health2.textContent = player1.health.toString();
  image.src= player2.attack;
    setTimeout(() => {
      image.src= player2.normal;
    }, delay);
}