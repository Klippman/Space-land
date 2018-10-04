
// function updatePlayerPosition() {
//     // if(!currentPlayer1Pos) currentPlayer1Pos = 0;
//     document.getElementById(currentPlayer1Pos).classList.remove("playerClass");

//     let playerSpin = spinnerOptions[Math.floor(Math.random() * spinnerOptions.length)];

//     let boardCheckP = "";

//     do {
//         boardCheckP = boardSpaces[currentPlayer1Pos]
//         currentPlayer1Pos++
//     } while (boardCheckP != playerSpin);

//     document.getElementById(currentPlayer1Pos).classList.add("playerClass");

//     if (currentPlayer1Pos >= 80) {
//         playerWin = true;
//     }

// }

// function updateComputerPosition() {

//     // if(currentComp1Position == "") currentComp1Position = 0;
//     // if(currentComp2Position == "") currentComp2Position = 0;
//     // if(currentComp3Position == "") currentComp3Position = 0;

//     let comp1Spin = spinnerOptions[Math.floor(Math.random() * spinnerOptions.length)];
//     let comp2Spin = spinnerOptions[Math.floor(Math.random() * spinnerOptions.length)];
//     let comp3Spin = spinnerOptions[Math.floor(Math.random() * spinnerOptions.length)];

//     //COMP 1 LOOP
//     document.getElementById(currentComp1Position).classList.remove("comp1Class");

//     let boardCheck1 = ""

//     do {
//         boardCheck1 = boardSpaces[currentComp1Position]
//         currentComp1Position++
//     } while (boardCheck1 != comp1Spin);

//     document.getElementById(currentComp1Position).classList.add("comp1Class");

//     //COMP 2 LOOP
//     document.getElementById(currentComp2Position).classList.remove("comp2Class");

//     let boardCheck2 = ""

//     do {
//         boardCheck2 = boardSpaces[currentComp2Position]
//         currentComp2Position++
//     } while (boardCheck2 != comp2Spin);

//     document.getElementById(currentComp2Position).classList.add("comp2Class");

//     //COMP 3 LOOP
//     document.getElementById(currentComp3Position).classList.remove("comp3Class");

//     let boardCheck3 = ""

//     do {
//         boardCheck3 = boardSpaces[currentComp3Position]
//         currentComp3Position++
//     } while (boardCheck3 != comp3Spin);

//     document.getElementById(currentComp3Position).classList.add("comp3Class");

//     if (currentComp1Position >= 80 || currentComp2Position >= 80 || currentComp3Position >= 80) {
//         gameover = true;
//     }
// }
