function next(current){
  const card = document.getElementById("card" + current);
  const input = card.querySelector("input");
  const msg = card.querySelector(".msg");

  if (msg) msg.textContent = "";

  if (input){
    const value = input.value.trim();

    if (value === ""){
      msg.textContent = "Oops, something went wrong....";
      input.focus();
      return;
    }

    if (value.length !== 4 || isNaN(value)){
      msg.textContent = "Oops! PIN must be exactly 4 numbers.";
      input.focus();
      return;
    }
  }

  // ////////// card1 === card3 /////
  card.classList.remove("active");
  const nextCard = document.getElementById("card" + (current + 1));

  if (nextCard){
    nextCard.classList.add("active");
  }
}

function back(hide){
  const card = document.getElementById("card" + hide);
  card.classList.remove("active");
  const backCard = document.getElementById("card" + (hide - 1));

  if (backCard){
    backCard.classList.add("active");
  } 
}

/////////////// Deposit Function ///////////
function save(){
  document.getElementById("card3").classList.remove("active");
  document.getElementById("card5").classList.add("active");
}

function backed(){
  document.getElementById("card6").classList.remove("active");
  document.getElementById("card1").classList.add("active");
}

/////////////// Withdraw Function ///////////
function withdraw(){
  document.getElementById("card3").classList.remove("active");
  document.getElementById("card7").classList.add("active");
}

function backagain(){
  document.getElementById("card8").classList.remove("active");
  document.getElementById("card9").classList.add("active");
}

function StartAgain(){
  document.getElementById("card9").classList.remove("active");
  document.getElementById("card1").classList.add("active");
}


function generateRandom() {
  let randomId = '';
  for (let i = 0; i < 14; i++) {
    randomId += Math.floor(Math.random() * 10);
  }
  return randomId;
}

function generateRandomTwo() {
  return Math.floor(10 + Math.random() * 90); 
}

// ///////////// Slip Function /////////////
let balanceAmount = 50000; 
function info(accountInformation){
  const now = new Date();
  const dateStr = now.toDateString(); 
  const timeStr = now.toLocaleTimeString();
  const randomNum = generateRandom();
  const lastTwoDigit = generateRandomTwo();
  const bankCard = "XXXX XX" + lastTwoDigit;

  if(accountInformation && !isNaN(accountInformation)){
    balanceAmount -= Number(accountInformation);
  }

  ///// fill slip
  document.getElementById("id").textContent = randomNum;
  document.getElementById("balance").textContent = balanceAmount;
  document.getElementById("date").textContent = dateStr;
  document.getElementById("time").textContent = timeStr;
  document.getElementById("bank").textContent = bankCard;

  document.getElementById("card3").classList.remove("active");
  document.getElementById("card4").classList.add("active");
}

// // Card5 input  ///////

function nexted(hide){
  const card = document.getElementById("card" + hide);
  const input = document.getElementById("depositAmount");
  const msg = document.getElementById("depositMsg");
  const value = input.value.trim();

  msg.textContent = ""; 

  if(value === "" || isNaN(value) || Number(value) <= 0){
    msg.textContent = "Please enter a valid amount.";
    input.focus();
    return; 
  }

  balanceAmount += Number(value);

  // // Slip details generate karo
  const now = new Date();
  const dateSt = now.toDateString(); 
  const timeSt = now.toLocaleTimeString();
  const rando = generateRandom();
  const lastTwoDigi = generateRandomTwo();
  const bankCar = "XXXX XX" + lastTwoDigi;

  document.getElementById("idDeposit").textContent = rando;
  document.getElementById("deposit").textContent = balanceAmount;
  document.getElementById("dateDeposit").textContent = dateSt;
  document.getElementById("timeDeposit").textContent = timeSt;
  document.getElementById("bankDeposit").textContent = bankCar;
  
  // Card switch
  card.classList.remove("active");
  document.getElementById("card6").classList.add("active");
}


// ///// withdraw function //////////
function given(hide){
  const card = document.getElementById("card" + hide);
  const inputWith = document.getElementById("withdrawAmount"); 
  const msgWith = document.getElementById("withdrawMsg");
  const value = inputWith.value.trim();

  msgWith.textContent = ""; 

  if(value === "" || isNaN(value) || Number(value) <= 0){
    msgWith.textContent = "Please enter a valid amount.";
    inputWith.focus();
    return; 
  }

  if(Number(value) > balanceAmount){
    msgWith.textContent = "Insufficient balance.";
    inputWith.focus();
    return;
  }

  balanceAmount -= Number(value);

  //  Withdraw slip details
  const now = new Date();
  const dateS = now.toDateString(); 
  const timeS = now.toLocaleTimeString();
  const rand = generateRandom();
  const lastTwoDig = generateRandomTwo();
  const bankCa = "XXXX XX" + lastTwoDig;

  document.getElementById("idWithdraw").textContent = rand;
  document.getElementById("withdraw").textContent = balanceAmount;
  document.getElementById("dateWithdraw").textContent = dateS;
  document.getElementById("timeWithdraw").textContent = timeS;
  document.getElementById("bankWithdraw").textContent = bankCa;
  
  // Card switch
  card.classList.remove("active");
  document.getElementById("card8").classList.add("active");
}
