const boardSpaces = {
    0: 'START', 1: 'RED', 2: 'BLUE', 3: 'GREEN', 4: 'PURPLE', 5: 'RED',
    6: 'BLUE', 7: 'GREEN', 8: 'PURPLE', 9: 'RED', 10: 'BLUE', 11: 'GREEN',
    12: 'PURPLE', 13: 'RED', 14: 'BLUE', 15: 'GREEN', 16: 'PURPLE',
    17: 'RED', 18: 'BLUE', 19: 'GREEN', 20: 'PURPLE', 21: 'RED',
    22: 'BLUE', 23: 'GREEN', 24: 'PURPLE', 25: 'RED', 26: 'BLUE', 
    27: 'GREEN', 28: 'PURPLE', 29: 'RED', 30: 'BLUE', 31: 'GREEN',
    32: 'PURPLE', 33: 'RED', 34: 'BLUE', 35: 'GREEN', 36: 'PURPLE',
    37: 'RED', 38: 'BLUE', 39: 'GREEN', 40: 'PURPLE', 41: 'RED',
    42: 'BLUE', 43: 'GREEN', 44: 'PURPLE', 45: 'RED', 46: 'BLUE',
    47: 'GREEN', 48: 'PURPLE', 49: 'RED', 50: 'BLUE', 51: 'GREEN',
    52: 'PURPLE', 53: 'RED', 54: 'BLUE', 55: 'GREEN', 56: 'PURPLE',
    57: 'RED', 58: 'BLUE', 59: 'GREEN', 60: 'PURPLE', 61: 'RED', 
    62: 'BLUE', 63: 'GREEN', 64: 'PURPLE', 65: 'RED', 66: 'BLUE', 
    67: 'GREEN', 68: 'PURPLE', 69: 'RED', 70: 'BLUE', 71: 'GREEN',
    72: 'PURPLE', 73: 'RED', 74: 'BLUE', 75:'GREEN', 76: 'PURPLE', 
    77: 'RED', 78: 'BLUE', 79: 'GREEN', 80: 'PURPLE'
}

const spinnerOptions = [
    'RED', 'RED', 'RED', 'RED', 'RED', 'RED', 'RED', 'RED', 'RED',
    'BLUE', 'BLUE', 'BLUE', 'BLUE', 'BLUE', 'BLUE', 'BLUE', 'BLUE', 
    'GREEN', 'GREEN', 'GREEN', 'GREEN', 'GREEN', 'GREEN', 'GREEN', 'GREEN', 
    'PURPLE', 'PURPLE', 'PURPLE', 'PURPLE', 'PURPLE', 'PURPLE', 'PURPLE', 'PURPLE', 
    // 'PARK', 'HOTH'
]


while(gameover = false){
    function gameStart(){
        player1Pos = 0
        comp1Pos = 0
        comp2Pos = 0
        comp3Pos = 0

        document.getElementById(player1Pos.toString()).classList.add("playerClass");
        document.getElementById(comp1Pos.toString()).classList.add("comp1Class");
        document.getElementById(comp2Pos.toString()).classList.add("comp2Class");
        document.getElementById(comp3Pos.toString()).classList.add("comp3Class");

        function spinToWin(){

            currentPlayer1Pos = ""
            currentComp1Position = ""
            currentComp2Position = ""
            currentComp3Position = ""

            document.getElementById(player1Pos.toString()).classList.remove("playerClass");
            document.getElementById(comp1Pos.toString()).classList.remove("comp1Class");
            document.getElementById(comp2Pos.toString()).classList.remove("comp2Class");
            document.getElementById(comp3Pos.toString()).classList.remove("comp3Class");

            function updatePlayerPosition(){
                if(!currentPlayer1Pos) currentPlayer1Pos = 0;

                let playerSpin = spinnerOptions[Math.floor(Math.random() * spinnerOptions.length)];

                let boardCheckP = boardSpaces[currentPlayer1Pos];

                do {
                    let boardCheckP = boardSpaces[currentPlayer1Pos]
                    currentPlayer1Pos ++             
                } while (boardCheckP != playerSpin);


            }

            function updateComputerPosition(){

                if(currentComp1Position == "") currentComp1Position = 0;
                if(!currentComp2Position) currentComp2Position = 0;
                if(!currentComp3Position) currentComp3Position = 0;

                let comp1Spin = spinnerOptions[Math.floor(Math.random() * spinnerOptions.length)];
                let comp2Spin = spinnerOptions[Math.floor(Math.random() * spinnerOptions.length)];
                let comp3Spin = spinnerOptions[Math.floor(Math.random() * spinnerOptions.length)];

                //COMP 1 LOOP
                document.getElementById(currentComp1Position).classList.remove("comp1Class");

                let boardCheck1 = boardSpaces[currentComp1Position]

                do {
                    let boardCheck1 = boardSpaces[currentComp1Position]
                    currentComp1Position ++             
                } while (boardCheck1 != comp1Spin);
                    
                document.getElementById(currentComp1Position).classList.add("comp1Class");
                // while loop, color == somecolor, increment current position

                //COMP 2 LOOP
                document.getElementById(currentComp2Position).classList.remove("comp2Class");

                let boardCheck2 = boardSpaces[currentComp2Position]

                do {
                    let boardCheck2 = boardSpaces[currentComp2Position]
                    currentComp2Position ++             
                } while (boardCheck2 != comp2Spin);
                    
                document.getElementById(currentComp2Position).classList.add("comp2Class");

                //COMP 3 LOOP
                document.getElementById(currentComp3Position).classList.remove("comp3Class");

                let boardCheck3 = boardSpaces[currentComp3Position]

                do {
                    let boardCheck3 = boardSpaces[currentComp3Position]
                    currentComp3Position ++             
                } while (boardCheck3 != comp3Spin);
                    
                document.getElementById(currentComp3Position).classList.add("comp3Class");

                if(currentComp1Position >= 80 || currentComp2Position >= 80 || currentComp3Position >= 80){
                    return gameover=true
                }


            }
            updatePlayerPosition();
            updateComputerPosition();

        }
        spinToWin();

    }

    gameStart();
}

// hover animation for characters //

var increaseSize = document.getElementById("storm_trooper");
increaseSize.addEventListener("mouseover", function(event){
    event.target.style.height = "300px";
    event.target.style.width = "300px";
    event.target.style.zIndex = "0";

setTimeout(function(){
    event.target.style.height = "150px";
    event.target.style.width = "150px";
    event.target.style.zIndex = "-1";
}, 600);
}, false);

var increaseSize2 = document.getElementById("r2");
increaseSize2.addEventListener("mouseover", function(event){
    event.target.style.height = "300px";
    event.target.style.width = "300px";
    event.target.style.zIndex = "0";

setTimeout(function(){
    event.target.style.height = "150px";
    event.target.style.width = "150px";
    event.target.style.zIndex = "-1";
}, 600);
}, false);

var increaseSize3 = document.getElementById("vader");
increaseSize3.addEventListener("mouseover", function(event){
    event.target.style.height = "300px";
    event.target.style.width = "300px";
    event.target.style.zIndex = "0";

setTimeout(function(){
    event.target.style.height = "150px";
    event.target.style.width = "150px";
    event.target.style.zIndex = "-1";
}, 600);
}, false);

var increaseSize4 = document.getElementById("c3");
increaseSize4.addEventListener("mouseover", function(event){
    event.target.style.height = "300px";
    event.target.style.width = "300px";
    event.target.style.zIndex = "0";

setTimeout(function(){
    event.target.style.height = "150px";
    event.target.style.width = "150px";
    event.target.style.zIndex = "-1";
}, 600);
}, false);

var increaseSize5 = document.getElementById("yoda");
increaseSize5.addEventListener("mouseover", function(event){
    event.target.style.height = "300px";
    event.target.style.width = "300px";
    event.target.style.zIndex = "0";

setTimeout(function(){
    event.target.style.height = "150px";
    event.target.style.width = "150px";
    event.target.style.zIndex = "-1";
}, 600);
}, false);

var increaseSize6 = document.getElementById("chewy");
increaseSize6.addEventListener("mouseover", function(event){
    event.target.style.height = "300px";
    event.target.style.width = "300px";
    event.target.style.zIndex = "0";

setTimeout(function(){
    event.target.style.height = "150px";
    event.target.style.width = "150px";
    event.target.style.zIndex = "-1";
}, 600);
}, false);

// audio for characters //

var stormTrooper = document.getElementById("trooper_clip");
increaseSize.addEventListener("click", function(){
    stormTrooper.play();
});


var r2 = document.getElementById("r2d2_clip");
increaseSize2.addEventListener("click", function(){
    r2.play();
});

var vader = document.getElementById("vader_clip");
increaseSize3.addEventListener("click", function(){
    vader.play();
});

var c3 = document.getElementById("c3_clip");
increaseSize4.addEventListener("click", function(){
    c3.play();
});

var yoda = document.getElementById("yoda_clip");
increaseSize5.addEventListener("click", function(){
    yoda.play();
});

var chewy = document.getElementById("chewy_clip");
increaseSize6.addEventListener("click", function(){
    chewy.play();
});









