"use strict";

let grant = 10;
let user = 40;
let loses = 0;
let getDamage = () => {
  let randNum = Math.floor(Math.random() * 5 + 1);
  return randNum;
}
let getHealth = 2;

function startGame() {
  // Asking the user if they want to play
  let userPrompt = prompt(`Do you want to play?`);
  if (userPrompt.toLowerCase() === "yes") {
    let name = prompt(`What is your name O Great One`);
    
    let startCombat = () => {
      // Asking the user if they want to attack or quit
      while (user > 0) {
        let userAction = prompt(`Would you like to attact or quit?`);
        // If the user wants to attack calculate the damage dealt to user and grant
        if (userAction.toLowerCase() === "attack" ) {
          grant -= getDamage();
          user -= getDamage();
          console.log(`Grant has ${grant} health left`);
          console.log(`${name} has ${user} health left`);
        } else {
          // If user answers anything else the loop will break
          console.log(`You have quit the game`);
          break;
        }
        // If grants health drops to 0 or below keep track of how many loses grant has
        if (grant <= 0 ) {
          console.log(`Grant has lost`);
          alert(`YOU HAVE WON THE THIS ROUND!`);
          loses++
          // If grant loses 3 or more times the user will win the entire game and the loop breaks
          if (loses >= 3) {
            alert(`${name} you have beaten Grant!`);
            console.log(`${name} is the Victor`)
            break;
          }
          // After each round the user gets to decide if they want to get health
          let health = prompt(`Would you like to heal up a little?`);
          // If the user says yes they get 2 extra health points and the game continues
          if (health.toLowerCase() === "yes") {
            user += getHealth;
            console.log(`${name} has ${user} health left.`);
            grant = 10;
            continue;
          } else {
            // If the user doesnt want the extra health the game continues
            grant = 10;
            continue;
          }
        }
        // If the user health gets down to 0 or lower the user has lost
        if (user <= 0) {
          console.log(`${name} has lost`);
        } 
      }
    }

    startCombat();

  } else {
    // If the user does not answer yes to the very first prompt the game does not start
    console.log(`Maybe next time.`);
  }
}











