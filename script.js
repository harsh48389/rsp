function getComputerChoice(){
  i=Math.floor(Math.random()*3);
  if(i===0){
    return 'rock';
  }
  else if(i===1){
    return 'paper';
  }
  else return 'scissors';
}
function getHumanChoice(){
  let userInput = prompt('enter the choice \n rock,paper,scissors');
  userInput=userInput.toLowerCase();
  if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
    return userInput;
  }
  else return getHumanChoice();
}
let humanScore=0, computerScore=0;
function playRound(humanChoice,computerChoice){
  if(humanChoice===computerChoice)return 'its a tie';
  else if(
    (humanChoice==='rock'&&computerChoice==='scissors')||
    (humanChoice==='paper'&&computerChoice==='rock')||
    (humanChoice==='scissors'&&computerChoice==='paper')
  ){
     humanScore++;
     return `you win ${humanChoice} beats ${computerChoice}!`;
  }
  else {
    computerScore++;
    return`you loose ${computerChoice} beats ${humanChoice}`;
  }
}
function playGame(){
  humanScore=0;
  computerScore=0;
  for(let i=0;i<5;i++){ 
    let humanSelction=getHumanChoice();
    let computerSelection=getComputerChoice();
    console.log(playRound(humanSelction,computerSelection));
    console.log(`you${humanScore}--${computerScore} computer`);
  }
  if(humanScore===computerScore){
    console.log('tie')
  }
  else if(humanScore>computerScore){
    console.log('you win ')
  }
  else console.log('looser')
}
playGame();