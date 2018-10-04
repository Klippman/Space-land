let gameover = false,
    playerWin = false,
    currentPlayer1Pos = 0,
    currentComp1Position = 0,
    currentComp2Position = 0,
    currentComp3Position = 0

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
    72: 'PURPLE', 73: 'RED', 74: 'BLUE', 75: 'GREEN', 76: 'PURPLE',
    77: 'RED', 78: 'BLUE', 79: 'GREEN', 80: 'PURPLE', 81: 'RED',
    82: 'BLUE', 83: 'GREEN', 84: 'PURPLE'
}

const spinnerOptions = [
    'RED', 'RED', 'RED', 'RED', 'RED', 'RED', 'RED', 'RED', 'RED',
    'BLUE', 'BLUE', 'BLUE', 'BLUE', 'BLUE', 'BLUE', 'BLUE', 'BLUE',
    'GREEN', 'GREEN', 'GREEN', 'GREEN', 'GREEN', 'GREEN', 'GREEN', 'GREEN',
    'PURPLE', 'PURPLE', 'PURPLE', 'PURPLE', 'PURPLE', 'PURPLE', 'PURPLE', 'PURPLE',
    // 'PARK', 'HOTH'
]

document.getElementById('gameStart').onclick = gameStart;


function gameStart() {
    document.getElementById(currentPlayer1Pos.toString()).classList.add("playerClass")
    document.getElementById(currentComp1Position.toString()).classList.add("comp1Class");
    document.getElementById(currentComp2Position.toString()).classList.add("comp2Class");
    document.getElementById(currentComp3Position.toString()).classList.add("comp3Class");
}

function spinToWin() {

    currentPlayer1Pos = updatePos(currentPlayer1Pos, "playerClass");
    currentComp1Position = updatePos(currentComp1Position, "comp1Class");
    currentComp2Position = updatePos(currentComp2Position, "comp2Class");
    currentComp3Position = updatePos(currentComp3Position, "comp3Class");

    if(currentComp1Position >= 80 || currentComp2Position >= 80 || currentComp3Position >= 80){
        alert('You are the loser, congratulations!')
        return location.reload();
    }
    if(currentPlayer1Pos >= 80){
        alert('You are the winner, congratulations!')
        return location.reload();
    }

}

document.getElementById('spin').onclick = spinToWin;

function updatePos(player, divClass){

    let spin = spinnerOptions[Math.floor(Math.random() * spinnerOptions.length)];

    document.getElementById(player.toString()).classList.remove(divClass);

    let boardCheck = ""

    do{
        player++
        boardCheck = boardSpaces[player]
    } while (boardCheck != spin);

    document.getElementById(player.toString()).classList.add(divClass);

    return player;
}


