"use strict";

let userPrompt = prompt("Do you want to play?");
let grant = 10;
let user = 40;
let wins = 0;

// if (userPrompt === "yes" || userPrompt === "Yes") {
//   let name = prompt(`What is your name?`);


//   while (grant <= 10 && user <= 40) {
//     let randNum = Math.floor(Math.random() * 3);
//     grant -= randNum;
//     user -= randNum;
//     console.log(`Grant has ${grant} health left`);
//     console.log(`${name} has ${user} health left`);

//     if (grant === 0 || user === 0) {
//       console.log(`Score is at 0`);
//       break;
//     }
    
//   }
// } else {
//     console.log(`Maybe another time`);
// }


if (userPrompt === "yes" || userPrompt === "Yes") {
  let name = prompt(`What is your name?`);


  while (user > 0) {
    let randNum = Math.floor(Math.random() * 2 + 1);
    let randNum2 = Math.floor(Math.random() * 2 + 1);
    grant -= randNum;
    user -= randNum2;
    console.log(`Grant has ${grant} health left`);
    console.log(`${name} has ${user} health left`);

    if (grant <= 0 ) {
      console.log(`Grant has lost`);
      wins++
      if (wins >= 3) {
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
} else {
    console.log(`Maybe another time`);
}



