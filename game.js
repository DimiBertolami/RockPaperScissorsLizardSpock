const arrHands = [];
let dealerScore = 0;
let playerScore = 0;
let dealerPicked = "";
let playerPicked = "";
arrHands.push("rock", "paper", "scissors", "lizard", "spock");

// document.getElementsByTagName("button").addEventListener("click", throwRandomHand);
document.getElementById("button_rocky").addEventListener("click", funcRocky);
document.getElementById("button_papy").addEventListener("click", funcPapy);
document.getElementById("button_sissy").addEventListener("click",funcScissors);
document.getElementById("button_lizy").addEventListener("click", funcLizy)
document.getElementById("button_spizy").addEventListener("click", funcSpocky);

// throwRandomHand()

function funcRocky(){
    throwRandomHand(playerPicked = "rock");
}
function funcPapy(){
    throwRandomHand(playerPicked = "paper");
}
function funcScissors(){
    throwRandomHand(playerPicked = "scissors");
}
function funcLizy(){
    throwRandomHand(playerPicked = "lizard");
}
function funcSpocky(){

    throwRandomHand(playerPicked = "spock");
}

function evaluate_Result(dealerPicked, playerPicked){
    if(playerPicked===dealerPicked){
        alert("no winner")
    } else {
        // dealerScore playerScore
        let elDealer = document.getElementById("TotalResultPlayer")
        let elPlayer = document.getElementById("TotalResultDealer")
        switch (dealerPicked){
            case "rock":
                // alert("dealer picked rock");
                if (playerPicked==="paper"){console.log("You win!"); elPlayer.textContent = `PLAYER SCORE: ${++playerScore}`}
                if (playerPicked==="scissors"){alert("Dealer Wins!");elDealer.textContent = `DEALER SCORE: ${++dealerScore}`}
                if (playerPicked==="lizard"){alert("Dealer Wins!");elDealer.textContent = `DEALER SCORE: ${++dealerScore}`}
                if (playerPicked==="spock"){alert("You Win!"); elPlayer.textContent = `PLAYER SCORE: ${++playerScore}`}
                break;
            case "paper":
                // alert("dealer picked paper");
                if (playerPicked==="rock"){alert("Dealer Wins!");elDealer.textContent = `DEALER SCORE: ${++dealerScore}`}
                if (playerPicked==="scissors"){alert("You Win!"); elPlayer.textContent = `PLAYER SCORE: ${++playerScore}`}
                if (playerPicked==="lizard"){alert("You Win!"); elPlayer.textContent = `PLAYER SCORE: ${++playerScore}`}
                if (playerPicked==="spock"){alert("Dealer Wins!");elDealer.textContent = `DEALER SCORE: ${++dealerScore}`}
                break;
            case "scissors":
                // alert("dealer picked scissors");
                if (playerPicked==="paper"){alert("Dealer Wins!");elDealer.textContent = `DEALER SCORE: ${++dealerScore}`}
                if (playerPicked==="rock"){alert("You Win!"); elPlayer.textContent = `PLAYER SCORE: ${++playerScore}`}
                if (playerPicked==="lizard"){alert("Dealer Wins!");elDealer.textContent = `DEALER SCORE: ${++dealerScore}`}
                if (playerPicked==="spock"){alert("You Win!"); elPlayer.textContent = `PLAYER SCORE: ${++playerScore}`}
                break;
            case "lizard":
                // alert("dealer picked lizard");
                if (playerPicked==="paper"){alert("Dealer Wins");elDealer.textContent = `DEALER SCORE: ${++dealerScore}`}
                if (playerPicked==="scissors"){alert("You Win!"); elPlayer.textContent = `PLAYER SCORE: ${++playerScore}`}
                if (playerPicked==="rock"){alert("You Win!"); elPlayer.textContent = `PLAYER SCORE: ${++playerScore}`}
                if (playerPicked==="spock"){alert("Dealer Wins!");elDealer.textContent = `DEALER SCORE: ${++dealerScore}`}
                break;
            case "spock":
                // alert("dealer picked spock");
                if (playerPicked==="paper"){alert("You Win!"); elPlayer.textContent = `PLAYER SCORE: ${++playerScore}`}
                if (playerPicked==="scissors"){alert("Dealer Wins!");elDealer.textContent = `DEALER SCORE: ${++dealerScore}`}
                if (playerPicked==="lizard"){alert("You Win!"); elPlayer.textContent = `PLAYER SCORE: ${++playerScore}`}
                if (playerPicked==="rock"){alert("Dealer Wins!");elDealer.textContent = `DEALER SCORE: ${++dealerScore}`}
                break;
        }
    }
}

function throwRandomHand(){
    let img = document.createElement("img");
    let i = RandomInteger();
    img.src = `images/${arrHands[i]}.jpg`;
    img.alt = arrHands[i];
    img.title = arrHands[i];
    img.id = arrHands[i];
    document.getElementById('target').innerHTML = "";
    document.getElementById('target').appendChild(img);
    console.log(`dealer picked ${arrHands[i]}`);
    console.log(`i picked ${playerPicked}`);
    evaluate_Result(arrHands[i], playerPicked);
}

function RandomInteger(){return Math.floor(Math.random() * arrHands.length)}
