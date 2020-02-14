var player = prompt("What is your first name?");
//var player = 'Player';
var playerUpper = player.toUpperCase();
var playerName = document.getElementById('player-name');
playerName.innerHTML = playerUpper;
//Name input and making uppercase all letters for player name
let pScore = 0;
let cScore = 0;
let result = document.getElementById('result');
function rock(){
  var mes = "R";
  document.getElementById('player-rps').style.backgroundImage = "url('img/rps-rock.png')";
  game(mes)
}
function paper(){
  var mes = "P";
  document.getElementById('player-rps').style.backgroundImage = "url('img/rps-paper.png')";
  game(mes)
}
function scissors(){
  var mes = "S";
  document.getElementById('player-rps').style.backgroundImage = "url('img/rps-scissors.png')";
  game(mes)
}
function game(mes){
  var p = mes;
  var computer = Math.floor(Math.random()*3);
  var comp;
  switch(computer){
    case 0:
    comp = "R";
    document.getElementById('computer-rps').style.backgroundImage = "url('img/rps-rock.png')";
    break;
    case 1:
    comp = "P";
    document.getElementById('computer-rps').style.backgroundImage = "url('img/rps-paper.png')";
    break;
    case 2:
    comp = "S";
    document.getElementById('computer-rps').style.backgroundImage = "url('img/rps-scissors.png')";
    break;
  }
  var c = comp;
  if(p==c){
    result.innerHTML="TIE";
  }
  else if(p=='R'){
    if(c=='P'){
      result.innerHTML="LOSE";
      cScore++;
    }
    else{
      result.innerHTML="WIN";
      pScore++;
    }
  }
  else if(p=='P'){
    if(c=='S'){
      result.innerHTML="LOSE";
      cScore++;
    }
    else{
      result.innerHTML="WIN";
      pScore++;
    }
  }
  else if(p=='S'){
    if(c=='P'){
      result.innerHTML="WIN";
      pScore++;
    }
    else{
      result.innerHTML="LOSE";
      cScore++;
    }
  }
  document.getElementById('computer-score').innerHTML=cScore;
  document.getElementById('player-score').innerHTML=pScore;
}
