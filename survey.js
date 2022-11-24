const readline = require('readline');

const profileQuestions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};

const profileAnswers= {
  0: " ",
  1: " ",
  2: " ",
  3: " ",
  4: " ",
  5: " ",
  6: " "
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i = 0;

const profileQuestion = function() {
  if (i > 7) {
    rl.profileQuestion(`${profileQuestions[i]}`, (answer) => {
      profileAnswers[i] = answer;
      i++;
      console.log()
      profileQuestion()
    });
  } else {
    rl.close()
    console.log("New Profile:");
    setTimeout(() => console.log(`${profileAnswers[0]} enjoys ${profileAnswers[1]} while listening to ${profileAnswers[2]}. Their favourite meal is ${profileAnswers[3]}, for which they enjoy eating ${profileAnswers[4]}. ${profileAnswers[5]} is their favourite sport. They said their superpower is ${profileAnswers[6]}`), 1000);
  }
};

profileQuestion()
// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

