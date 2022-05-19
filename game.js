const arrHands = [];
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
        switch (dealerPicked){
            case "rock":
                alert("dealer picked rock");
                if (playerPicked==="paper"){alert("You win!")}
                if (playerPicked==="scissors"){alert("Dealer Wins!")}
                if (playerPicked==="lizard"){alert("Dealer Wins!")}
                if (playerPicked==="spock"){alert("You Win!")}
                break;
            case "paper":
                alert("dealer picked paper");
                if (playerPicked==="rock"){alert("Dealer Wins!")}
                if (playerPicked==="scissors"){alert("You Win!")}
                if (playerPicked==="lizard"){alert("You Win!")}
                if (playerPicked==="spock"){alert("Dealer Wins!")}
                break;
            case "scissors":
                alert("dealer picked scissors");
                if (playerPicked==="paper"){alert("Dealer Wins!")}
                if (playerPicked==="rock"){alert("You Win!")}
                if (playerPicked==="lizard"){alert("Dealer Wins!")}
                if (playerPicked==="spock"){alert("You Win!")}
                break;
            case "lizard":
                alert("dealer picked lizard");
                if (playerPicked==="paper"){alert("Dealer Wins")}
                if (playerPicked==="scissors"){alert("You Win!")}
                if (playerPicked==="rock"){alert("You Win!")}
                if (playerPicked==="spock"){alert("Dealer Wins!")}
                break;
            case "spock":
                alert("dealer picked spock");
                if (playerPicked==="paper"){alert("You Win!")}
                if (playerPicked==="scissors"){alert("Dealer Wins!")}
                if (playerPicked==="lizard"){alert("You Win!")}
                if (playerPicked==="rock"){alert("Dealer Wins!")}
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
