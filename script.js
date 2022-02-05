'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Number!';
// document.querySelector('.number').textContent='20';
// document.querySelector('.score').textContent='30';
// document.querySelector('.')
let score = 20;
let highscore=0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = '🚧 No Number!';
        //when no number is there
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
       
        //when guess is correct
    } else if (guess > secretNumber) {
        //when guess is high

        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😭 Lost';
        }
    } else if (guess < secretNumber) {
        //when guess is low
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😭 Lost';
        }
    }
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
   // document.querySelector('.number').value = secretNumber;
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent='Start Guessing...';
    document.querySelector('.guess').value=' ';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';



});
