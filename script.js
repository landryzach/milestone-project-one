const deck = ["A Clubs", "2 Clubs", "3 Clubs", "4 Clubs", "5 Clubs", "6 Clubs", "7 Clubs", "8 Clubs", "9 Clubs", "10 Clubs", "J Clubs", "Q Clubs", "K Clubs", 
    "A Hearts", "2 Hearts", "3 Hearts", "4 Hearts", "5 Hearts", "6 Hearts", "7 Hearts", "8 Hearts", "9 Hearts", "10 Hearts", "J Hearts", "Q Hearts", "K Hearts",
    "A Spades", "2 Spades", "3 Spades", "4 Spades", "5 Spades", "6 Spades", "7 Spades", "8 Spades", "9 Spades", "10 Spades", "J Spades", "Q Spades", "K Spades",
    "A Diamonds", "2 Diamonds", "3 Diamonds", "4 Diamonds", "5 Diamonds", "6 Diamonds", "7 Diamonds", "8 Diamonds", "9 Diamonds", "10 Diamonds", "J Diamonds", "Q Diamonds", "K Diamonds"];

let User1 = [];
let User2 = [];
let user1Score = 0;
let user2Score = 0;
let hit = false;


function shuffle() {
    for(let i=deck.length - 1; i > 0; i--){
        let d = Math.floor(Math.random() * i)
        let x = deck[i];
        deck[i] = deck[d];
        deck[d] = x;
    }
    console.log(deck);
} //got framing of this code from https://www.programiz.com/javascript/examples/shuffle-card
//shuffle is complete and is working

function startGame(){
    for(let i=0; i<2; i++){
        let user1 = deck.pop();
        User1.push(user1);
        user1Score += getScore(user1);
        console.log(user1);
        console.log(user1Score);
    } for(let i=0; i<2; i++){
        let user2 = deck.pop();
        User2.push(user2);
        user2Score += getScore(user2);
        console.log(user2);
        console.log(user2Score);
    }
    
    document.getElementById("hitMe1").addEventListener("click", hitMe1);
    document.getElementById("hitMe2").addEventListener("click", hitMe2);
    document.getElementById("stay1").addEventListener("click", stay1);
    document.getElementById("stay2").addEventListener("click", stay2);

    document.getElementById("user1").innerText = User1;
    document.getElementById("user2").innerText = User2;
    document.getElementById("u1score").innerText = "User1:" + " " + user1Score;
    document.getElementById("u2score").innerText = "User2:" + " " + user2Score;
    hitMe1.disabled = false;
    hitMe2.disabled = false;
    stay1.disabled = false;
    stay2.disabled = false;
}

function hitMe1(){
    let user1 = deck.pop();
    User1.push(user1);
    user1Score += getScore(user1);
    console.log(user1, "hit1")
    document.getElementById("user1").innerText = User1;
    document.getElementById("u1score").innerText = "User1:" + " " + user1Score;
}

function hitMe2(){
    let user2 = deck.pop();
    User2.push(user2);
    user2Score += getScore(user2);
    console.log(user2, "hit2");
    document.getElementById("user2").innerText = User2;
    document.getElementById("u2score").innerText = "User2:" + " " + user2Score;
}



function stay1(){


    let result = "";
    console.log(result, "result");
    if (user1Score === user2Score){
        result = "It's a tie";
    } else if (user1Score > user2Score){
        result = "User1 Wins!";
    } else if (user1Score < user2Score){
        result = "User2 Wins!";
    } 
}

function stay2(){
    

    let result = "";
    console.log(result, "result");
    if (user1Score === user2Score){
        result = "It's a tie";
    } else if (user1Score > user2Score){
        result = "User1 Wins!";
    } else if (user1Score < user2Score){
        result = "User2 Wins!";
    } 
}

function getScore(hand){
    let cards = hand.split(" ").slice(0,2);
    let score = hand[0];
    
        if(score === "A"){
        return 1;
        } if(score === "J"){
        return 10;
        } if(score === "Q"){
        return 10;
        } if(score === "K"){
        return 10;
        } if(score === "1"){ //added lines 80 and 81 for "10" cards because hand[0] only grabs character in the element.
        return 10;
        } else {
        return parseInt(score);
    }
} //thanks for the help on this one!
//getScore is complete and is working

window.onload = () => {
    shuffle();
    startGame();
}

