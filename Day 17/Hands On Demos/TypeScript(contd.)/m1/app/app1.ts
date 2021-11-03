/// <reference path="player.ts" />

function startGame() {
    // starting a new game

    // logMessage( 'Welcome to MultiMath!');
   

    let  playerName :string | undefined = getInputValue('playername');
  
    logPlayer(playerName);
    postScore(80,playerName);
    postScore(-5,playerName);


    // let messagesElement : HTMLElement |string |null; 
    // messagesElement= document.getElementById('messages');
   
    // messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
  }
  
  function logPlayer(name :string = 'MultiMath Player' ) :void {
    console.log(`New game starting for player: ${name}`);
  }


  // function getInputValue(elementID: string): string | undefined {

  //   const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  
  //   if (inputElement.value === '') {
  //     return undefined;
  //   }
  //   else {
  //     return inputElement.value;
  //   }  
  // }

  function postScore(score: number, playerName: string = 'MultiMath Player'): void {

    let logger: (value: string) => void;
  
    if (score < 0) {
      logger = logError;
    }
    else {
      logger = logMessage;
    }
  
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
  
    logger(`Score: ${score}`);
  }

  document.getElementById('startGame')!.addEventListener('click', startGame);

  // function logMessage(message:string):void{
  //   console.log(message);
  // }

  const logMessage = (message:string) =>  console.log(message);

  function logError(err: string): void {
  console.error(err);
  }
  

  const firstPlayer : Player = new Player();
  firstPlayer.name = 'Lanier';
  console.log(firstPlayer.formatName());

  // let myResult : Result = {
  //   playerName: 'Marie',
  //   score:5,
  //   problemCount:5,
  //   factor:7
  // };

  // let player:Person = {
  //   name: 'Daniel',
  //   formatName : () => 'Dan'
  // };