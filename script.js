const deck = ["A Clubs", "2 Clubs", "3 Clubs", "4 Clubs", "5 Clubs", "6 Clubs", "7 Clubs", "8 Clubs", "9 Clubs", "10 Clubs", "J Clubs", "Q Clubs", "K Clubs", 
    "A Hearts", "2 Hearts", "3 Hearts", "4 Hearts", "5 Hearts", "6 Hearts", "7 Hearts", "8 Hearts", "9 Hearts", "10 Hearts", "J Hearts", "Q Hearts", "K Hearts",
    "A Spades", "2 Spades", "3 Spades", "4 Spades", "5 Spades", "6 Spades", "7 Spades", "8 Spades", "9 Spades", "10 Spades", "J Spades", "Q Spades", "K Spades",
    "A Diamonds", "2 Diamonds", "3 Diamonds", "4 Diamonds", "5 Diamonds", "6 Diamonds", "7 Diamonds", "8 Diamonds", "9 Diamonds", "10 Diamonds", "J Diamonds", "Q Diamonds", "K Diamonds"];

const user1 = [];
const user2 = [];
// user1.forEach(getSum);
// const element = document.getElementById("sum");
// document.getElementById("user1").innerHTML = sum;


const user1Card = deck[Math.floor(Math.random() * deck.length)];
const user1Card2 = deck[Math.floor(Math.random() * deck.length)];
const user2Card = deck[Math.floor(Math.random() * deck.length)];
const user2Card2 = deck[Math.floor(Math.random() * deck.length)];
const newCard = deck[Math.floor(Math.random() * deck.length)];

function user1Hand() {
  return user1 = [user1Card, user1Card2];
}
user1.push(user1Hand);
console.log(user1);

function user2Hand() {
    return user2 = [user2Card, user2Card2];
}
user2.push(user2Hand)

function startGame(){
    user1Hand();
    user2Hand();
    getSum();
}
    
function hitMe(){
    return card = [newCard]
    //need to push to either user
}


function stay(){
    //need stop function that is adding cards
}

function getSum(){
    sum += values;
}