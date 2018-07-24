"use strict";

let grant = 10;
let user = 40;
let loses = 0;

let getDamage = () => {
  let randNum = Math.floor(Math.random() * 5 + 1);
  return randNum;
}

function startGame() {
  let userPrompt = prompt(`Do you want to play?`);
  if (userPrompt === "yes" || userPrompt === "Yes" ) {
    let name = prompt(`What is your name O Great One`);
    
    let startCombat = () => {
      while (user > 0) {
        let userAction = prompt(`Would you like to attact or quit?`);

        if (userAction === "attack" || userAction === "Attack") {
          grant -= getDamage();
          user -= getDamage();
          console.log(`Grant has ${grant} health left`);
          console.log(`${name} has ${user} health left`);
        } else {
          console.log(`You have quit the game`);
          break;
        }

        if (grant <= 0 ) {
          console.log(`Grant has lost`);
          alert(`YOU HAVE WON THE FIRST ROUND!`);
          loses++
          if (loses >= 3) {
            console.log(`${name} is the Victor`)
            break;
          }
          grant = 10;
          continue;
        }
        if (user <= 0) {
          console.log(`${name} has lost`);
        } 
      }
    }

    startCombat();

  } else {
    console.log(`Maybe next time.`);
  }
}

console.log(startGame());


