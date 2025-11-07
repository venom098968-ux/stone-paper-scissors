let userScore = 0
let compScore = 0

const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const drawGame = () => {
    console.log('game was draw');
    msg.innerText = 'Game was Draw. Play again';
    msg.style.backgroundColor = '#081b31';
};

const showWinner = (userWin, userchoice, compchoice) => {
    if(userWin) {
        console.log(`You win! Your ${userchoice} beats ${compchoice}`);
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = 'green';
        userScore ++
        userScorePara.innerText = userScore
        
    } else {
        console.log(`You lose! ${compchoice} beats your ${userchoice}`);
        msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = 'red';
        compScore ++
        compScorePara.innerText = compScore
    }
};

const genCompChoice = () => {
    const options = ['rock','paper','scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
};

const playGame = (userchoice) => {
    console.log('user choice =', userchoice);
    const compchoice = genCompChoice();
    console.log('computer choice =', compchoice);

    if(userchoice === compchoice){
        drawGame();
    } else {
        let userWin = true;
        if(userchoice === 'rock'){
            userWin = compchoice === 'paper' ? false : true;
        } else if(userchoice === 'paper'){
            userWin = compchoice === 'scissors' ? false : true;
        } else if(userchoice === 'scissors'){
            userWin = compchoice === 'rock' ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
};

const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
   choice.addEventListener('click', () => {
    const userchoice = choice.getAttribute('id');
    playGame(userchoice);
   });
});
