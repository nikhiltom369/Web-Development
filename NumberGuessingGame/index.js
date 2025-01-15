//Number Guessing Game

const min=1;
const max=10;
const answer=Math.floor(Math.random()*(max-min+1)-min);

let attempt=0;
let guess;
let running=true;

while(running){

    guess=window.prompt(`Guess a number btwn 1 and 10`);
    guess=Number(guess);
    
    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }
    else if(guess<min || guess>max){
        window.alert(`Enter a valid number`);
    }
    else{
        attempt++;
        if(guess<answer){
            window.alert("Too low try again!");
        }
        else if(guess>answer){
            window.alert("Too high Try again!");
        }
        else{
            window.alert("Your answer is correct");
            running=false;
        }
    }
    running=false;
}