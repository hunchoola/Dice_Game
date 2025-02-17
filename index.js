let wallet1 = 100;
let wallet2 = 100;

function setWallets() {
  wallet1 = parseInt(document.getElementById("wallet1Input").value) || 0;
  wallet2 = parseInt(document.getElementById("wallet2Input").value) || 0;
  document.getElementById("wallet1").innerText = wallet1;
  document.getElementById("wallet2").innerText = wallet2;
}

function PlayGame() {
  let betAmount = parseInt(document.getElementById("betAmountInput").value) || 1;

  if (wallet1 < betAmount || wallet2 < betAmount) {
    // alert("One of the players does not have enough money to bet this amount.");
    return;
  }

  // Generate random dice rolls
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
  document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

  // Determine the winner and update wallets
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🏆";
    wallet1 += betAmount;
    wallet2 -= betAmount;
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
    wallet2 += betAmount;
    wallet1 -= betAmount;
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  }

  // Update wallet display
  document.getElementById("wallet1").innerText = wallet1;
  document.getElementById("wallet2").innerText = wallet2;

   // Alert if any player is low on balance after the game
   if (wallet1 <= 50) {
    alert("Player 1: Your balance is too low, please deposit more money.");
  }
  if (wallet2 <= 50) {
    alert("Player 2: Your balance is too low, please deposit more money.");
  }
}


// Attach PlayGame function to the "Play" button
document.querySelector(".reload").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default page reload
  PlayGame();
});
