var numbersArray = new Array(76);
var callerArray = new Array(76);
window.addEventListener("load", loadStorage);
var btn1 = document.getElementById("new-game-random");
var btn2 = document.getElementById("new-game-specified");
var btn3 = document.getElementById("i-won");
var btn4 = document.getElementById("i-lost");
var btn5 = document.getElementById("caller");
if (btn1) {
    document.getElementById("new-game-random").addEventListener("click", newCardRandom, false);
}
if (btn2) {
    document.getElementById("new-game-specified").addEventListener("click", newCardSpecified, false);
}
if (btn3) {
    document.getElementById("i-won").addEventListener("click", iWon, false);
}
if (btn4) {
    document.getElementById("i-lost").addEventListener("click", iLost, false);
}
if (btn5) {
    document.getElementById("caller").addEventListener("click", caller, false);
}

function loadStorage() {
    let wins = localStorage.getItem("wins");
    let losses = localStorage.getItem("losses");
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
}

function generateCaller() {
    for (var x = 0; x < 75; x++) {
        if (x <= 15) {
            callerArray[x] = "B" + random(1, 15);
        } else if (x <= 30) {
            callerArray[x] = "I" + random(16, 30);
        } else if (x <= 45) {
            callerArray[x] = "N" + random(31, 45);
        } else if (x <= 60) {
            callerArray[x] = "G" + random(46, 60);
        } else {
            callerArray[x] = "O" + random(61, 75);
        }
    }
}

function newCardRandom() {
    var caller = document.createElement("p");
    caller.id = "call";
    var callerD = document.getElementById("callerD");
    callerD.appendChild(caller);
    var table = document.getElementById("bingoCard");
    for (var x = 0; x < 6; x++) {
        var row, cell;
        switch (x) {
            case 0:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = "B";
                cell.id = "b";
                cell = row.insertCell(1);
                cell.innerHTML = "I";
                cell.id = "i";
                cell = row.insertCell(2);
                cell.innerHTML = "N";
                cell.id = "n";
                cell = row.insertCell(3);
                cell.innerHTML = "G";
                cell.id = "g";
                cell = row.insertCell(4);
                cell.innerHTML = "O";
                cell.id = "o";
                break;
            case 1:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = generateRandomNumber(1, 15);
                cell.className = "a";
                cell.id = 0;
                cell.onmousedown = changeColor;
                cell = row.insertCell(1);
                cell.innerHTML = generateRandomNumber(16, 30);
                cell.className = "a";
                cell.id = 1;
                cell.onmousedown = changeColor;
                cell = row.insertCell(2);
                cell.innerHTML = generateRandomNumber(31, 45);
                cell.className = "a";
                cell.id = 2;
                cell.onmousedown = changeColor;
                cell = row.insertCell(3);
                cell.innerHTML = generateRandomNumber(46, 60);
                cell.className = "a";
                cell.id = 3;
                cell.onmousedown = changeColor;
                cell = row.insertCell(4);
                cell.innerHTML = generateRandomNumber(61, 75);
                cell.className = "a";
                cell.id = 4;
                cell.onmousedown = changeColor;
                break;
            case 2:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = generateRandomNumber(1, 15);
                cell.className = "a";
                cell.id = 5;
                cell.onmousedown = changeColor;
                cell = row.insertCell(1);
                cell.innerHTML = generateRandomNumber(16, 30);
                cell.className = "a";
                cell.id = 6;
                cell.onmousedown = changeColor;
                cell = row.insertCell(2);
                cell.innerHTML = generateRandomNumber(31, 45);
                cell.className = "a";
                cell.id = 7;
                cell.onmousedown = changeColor;
                cell = row.insertCell(3);
                cell.innerHTML = generateRandomNumber(46, 60);
                cell.className = "a";
                cell.id = 8;
                cell.onmousedown = changeColor;
                cell = row.insertCell(4);
                cell.innerHTML = generateRandomNumber(61, 75);
                cell.className = "a";
                cell.id = 9;
                cell.onmousedown = changeColor;
                break;
            case 3:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = generateRandomNumber(1, 15);
                cell.className = "a";
                cell.id = 10;
                cell.onmousedown = changeColor;
                cell = row.insertCell(1);
                cell.innerHTML = generateRandomNumber(16, 30);
                cell.className = "a";
                cell.id = 11;
                cell.onmousedown = changeColor;
                cell = row.insertCell(2);
                cell.innerHTML = "f";
                cell.id = "f";
                cell = row.insertCell(3);
                cell.innerHTML = generateRandomNumber(46, 60);
                cell.className = "a";
                cell.id = 12;
                cell.onmousedown = changeColor;
                cell = row.insertCell(4);
                cell.innerHTML = generateRandomNumber(61, 75);
                cell.className = "a";
                cell.id = 13;
                cell.onmousedown = changeColor;
                break;
            case 4:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = generateRandomNumber(1, 15);
                cell.className = "a";
                cell.id = 14;
                cell.onmousedown = changeColor;
                cell = row.insertCell(1);
                cell.innerHTML = generateRandomNumber(16, 30);
                cell.className = "a";
                cell.id = 15;
                cell.onmousedown = changeColor;
                cell = row.insertCell(2);
                cell.innerHTML = generateRandomNumber(31, 45);
                cell.className = "a";
                cell.id = 16;
                cell.onmousedown = changeColor;
                cell = row.insertCell(3);
                cell.innerHTML = generateRandomNumber(46, 60);
                cell.className = "a";
                cell.id = 17;
                cell.onmousedown = changeColor;
                cell = row.insertCell(4);
                cell.innerHTML = generateRandomNumber(61, 75);
                cell.className = "a";
                cell.id = 18;
                cell.onmousedown = changeColor;
                break;
            case 5:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = generateRandomNumber(1, 15);
                cell.className = "a";
                cell.id = 19;
                cell.onmousedown = changeColor;
                cell = row.insertCell(1);
                cell.innerHTML = generateRandomNumber(16, 30);
                cell.className = "a";
                cell.id = 20;
                cell.onmousedown = changeColor;
                cell = row.insertCell(2);
                cell.innerHTML = generateRandomNumber(31, 45);
                cell.className = "a";
                cell.id = 21;
                cell.onmousedown = changeColor;
                cell = row.insertCell(3);
                cell.innerHTML = generateRandomNumber(46, 60);
                cell.className = "a";
                cell.id = 22;
                cell.onmousedown = changeColor;
                cell = row.insertCell(4);
                cell.innerHTML = generateRandomNumber(61, 75);
                cell.className = "a";
                cell.id = 23;
                cell.onmousedown = changeColor;
                break;

        }

    }
    button1 = document.getElementById("new-game-random");
    button2 = document.getElementById("new-game-specified");
    generateCaller();
    buttonDissapear(button1);
    buttonDissapear(button2);
    button3 = document.getElementById("i-won");
    button4 = document.getElementById("i-lost");
    button5 = document.getElementById("caller");
    buttonShow(button3);
    buttonShow(button4);
    buttonShow(button5);

}

function random(maximum, minimum) {
    var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return randomNumber;
}

function changeColor(x) {
    if (x.target.className === "a") {
        x.target.className = "selected";
        var alertM = true;
        checkBingo(alertM);
    } else {
        x.target.className = "a";
    }
}

function buttonDissapear(button) {
    button.style.visibility = "hidden";
}

function buttonShow(button) {
    button.style.visibility = "visible";
}

function caller() {
    var randomCall = random(1, callerArray.length);
    if (callerArray[randomCall] === undefined) {
        alert("No more numbers to call from!");
    }
    document.getElementById("call").innerHTML = callerArray[randomCall];
    callerArray.splice(randomCall, 1);
}

function newCardSpecified() {
    var userString = prompt("Enter the string regex:");
    if (userString === null) {
        return;
    }
    if (checkRegex(userString)) {
        generateCardSpecific(userString);
    } else {
        alert("Invalid string!");
        newCardSpecified();
    }
}

function generateRandomNumber(min, max) {
    var randomNumber = random(max, min);
    do {
        var randomNumber = random(max, min);
        if (!numbersArray.includes(randomNumber)) {
            numbersArray.push(randomNumber);
            break;
        }
    }
    while (numbersArray.includes(randomNumber))
    return randomNumber;
}

function generateCardSpecific(userString) {
    userString = userString.replace(/[(]/g, '');
    userString = userString.replace(/[)]/g, ',');
    userString = userString.replace('B', '');
    userString = userString.replace('b', '');
    userString = userString.replace('I', '');
    userString = userString.replace('i', '');
    userString = userString.replace('N', '');
    userString = userString.replace('n', '');
    userString = userString.replace('G', '');
    userString = userString.replace('g', '');
    userString = userString.replace('O', '');
    userString = userString.replace('o', '');
    userString = userString.split(",");
    userString.pop();
    userString.splice(12, 1);
    var table = document.getElementById("bingoCard");
    for (var x = 0; x < 6; x++) {
        switch (x) {
            case 0:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = "B";
                cell.id = "b";
                cell = row.insertCell(1);
                cell.innerHTML = "I";
                cell.id = "i";
                cell = row.insertCell(2);
                cell.innerHTML = "N";
                cell.id = "n";
                cell = row.insertCell(3);
                cell.innerHTML = "G";
                cell.id = "g";
                cell = row.insertCell(4);
                cell.innerHTML = "O";
                cell.id = "o";
                break;
            case 1:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = userString[0];
                cell.className = "a";
                cell.id = 0;
                cell.onmousedown = changeColor;
                cell = row.insertCell(1);
                cell.innerHTML = userString[5];
                cell.className = "a";
                cell.id = 1;
                cell.onmousedown = changeColor;
                cell = row.insertCell(2);
                cell.innerHTML = userString[10];
                cell.className = "a";
                cell.id = 2;
                cell.onmousedown = changeColor;
                cell = row.insertCell(3);
                cell.innerHTML = userString[14];
                cell.className = "a";
                cell.id = 3;
                cell.onmousedown = changeColor;
                cell = row.insertCell(4);
                cell.innerHTML = userString[19];
                cell.className = "a";
                cell.id = 4;
                cell.onmousedown = changeColor;
                break;
            case 2:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = userString[1];
                cell.className = "a";
                cell.id = 5;
                cell.onmousedown = changeColor;
                cell = row.insertCell(1);
                cell.innerHTML = userString[6];
                cell.className = "a";
                cell.id = 6;
                cell.onmousedown = changeColor;
                cell = row.insertCell(2);
                cell.innerHTML = userString[11];
                cell.className = "a";
                cell.id = 7;
                cell.onmousedown = changeColor;
                cell = row.insertCell(3);
                cell.innerHTML = userString[15];
                cell.className = "a";
                cell.id = 8;
                cell.onmousedown = changeColor;
                cell = row.insertCell(4);
                cell.innerHTML = userString[20];
                cell.className = "a";
                cell.id = 9;
                cell.onmousedown = changeColor;
                break;
            case 3:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = userString[2];
                cell.className = "a";
                cell.id = 10;
                cell.onmousedown = changeColor;
                cell = row.insertCell(1);
                cell.innerHTML = userString[7];
                cell.className = "a";
                cell.id = 11;
                cell.onmousedown = changeColor;
                cell = row.insertCell(2);
                cell.innerHTML = "f";
                cell.id = "f";
                cell = row.insertCell(3);
                cell.innerHTML = userString[16];
                cell.className = "a";
                cell.id = 12;
                cell.onmousedown = changeColor;
                cell = row.insertCell(4);
                cell.innerHTML = userString[21];
                cell.className = "a";
                cell.id = 13;
                cell.onmousedown = changeColor;
                break;
            case 4:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = userString[3];
                cell.className = "a";
                cell.id = 14;
                cell.onmousedown = changeColor;
                cell = row.insertCell(1);
                cell.innerHTML = userString[8];
                cell.className = "a";
                cell.id = 15;
                cell.onmousedown = changeColor;
                cell = row.insertCell(2);
                cell.innerHTML = userString[12];
                cell.className = "a";
                cell.id = 16;
                cell.onmousedown = changeColor;
                cell = row.insertCell(3);
                cell.innerHTML = userString[17];
                cell.className = "a";
                cell.id = 17;
                cell.onmousedown = changeColor;
                cell = row.insertCell(4);
                cell.innerHTML = userString[22];
                cell.className = "a";
                cell.id = 18;
                cell.onmousedown = changeColor;
                break;
            case 5:
                row = table.insertRow(x);
                cell = row.insertCell(0);
                cell.innerHTML = userString[4];;
                cell.className = "a";
                cell.id = 19;
                cell.onmousedown = changeColor;
                cell = row.insertCell(1);
                cell.innerHTML = userString[9];
                cell.className = "a";
                cell.id = 20;
                cell.onmousedown = changeColor;
                cell = row.insertCell(2);
                cell.innerHTML = userString[13];
                cell.className = "a";
                cell.id = 21;
                cell.onmousedown = changeColor;
                cell = row.insertCell(3);
                cell.innerHTML = userString[18];
                cell.className = "a";
                cell.id = 22;
                cell.onmousedown = changeColor;
                cell = row.insertCell(4);
                cell.innerHTML = userString[23];
                cell.className = "a";
                cell.id = 23;
                cell.onmousedown = changeColor;
                break;

        }

    }
    button1 = document.getElementById("new-game-random");
    button2 = document.getElementById("new-game-specified");
    generateCaller();
    buttonDissapear(button1);
    buttonDissapear(button2);
    button3 = document.getElementById("i-won");
    button4 = document.getElementById("i-lost");
    button5 = document.getElementById("caller");
    buttonShow(button3);
    buttonShow(button4);
    buttonShow(button5);


}

function checkRegex(userRegex) {
    const regex = /[b][(]([1-9]|1[0-5]),([1-9]|1[0-5]),([1-9]|1[0-5]),([1-9]|1[0-5]),([1-9]|1[0-5])[)][i][(](1[6-9]|2[0-9]|30),(1[6-9]|2[0-9]|30),(1[6-9]|2[0-9]|30),(1[6-9]|2[0-9]|30),(1[6-9]|2[0-9]|30)[)][n][(](3[1-9]|4[0-5]),(3[1-9]|4[0-5]),[f],(3[1-9]|4[0-5]),(3[1-9]|4[0-5])[)][g][(](4[6-9]|5[0-9]|60),(4[6-9]|5[0-9]|60),(4[6-9]|5[0-9]|60),(4[6-9]|5[0-9]|60),(4[6-9]|5[0-9]|60)[)][o][(](6[1-9]|7[0-5]),(6[1-9]|7[0-5]),(6[1-9]|7[0-5]),(6[1-9]|7[0-5]),(6[1-9]|7[0-5])[)]/gi
    if (regex.test(userRegex)) {
        return true;
    }
    return false;
}
function checkBingo(alertM){
    var won = false;
    check0 = document.getElementById(0);
    check1 = document.getElementById(1);
    check2 = document.getElementById(2);
    check3 = document.getElementById(3);
    check4 = document.getElementById(4);
    if (check0.className === "selected" && check1.className === "selected" && check2.className === "selected" && check3.className === "selected" && check4.className === "selected") {
        won = true;
    }
    check5 = document.getElementById(5);
    check6 = document.getElementById(6);
    check7 = document.getElementById(7);
    check8 = document.getElementById(8);
    check9 = document.getElementById(9);
    if (check5.className === "selected" && check6.className === "selected" && check7.className === "selected" && check8.className === "selected" && check9.className === "selected") {
        won = true;
    }
    check10 = document.getElementById(10);
    check11 = document.getElementById(11);
    check12 = document.getElementById(12);
    check13 = document.getElementById(13);
    if (check10.className === "selected" && check11.className === "selected" && check12.className === "selected" && check13.className === "selected") {
        won = true;
    }
    check14 = document.getElementById(14);
    check15 = document.getElementById(15);
    check16 = document.getElementById(16);
    check17 = document.getElementById(17);
    check18 = document.getElementById(18);
    if (check14.className === "selected" && check15.className === "selected" && check16.className === "selected" && check17.className === "selected" && check18.className === "selected") {
        won = true;
    }
    check19 = document.getElementById(19);
    check20 = document.getElementById(20);
    check21 = document.getElementById(21);
    check22 = document.getElementById(22);
    check23 = document.getElementById(23);
    if (check20.className === "selected" && check20.className === "selected" && check21.className === "selected" && check22.className === "selected" && check23.className === "selected") {
        won = true;
    }
    if (check0.className === "selected" && check5.className === "selected" && check10.className === "selected" && check14.className === "selected" && check19.className === "selected") {
        won = true;
    }
    if (check1.className === "selected" && check6.className === "selected" && check11.className === "selected" && check15.className === "selected" && check20.className === "selected") {
        won = true;
    }
    if (check2.className === "selected" && check7.className === "selected" && check16.className === "selected" && check21.className === "selected") {
        won = true;
    }
    if (check3.className === "selected" && check8.className === "selected" && check12.className === "selected" && check17.className === "selected" && check22.className === "selected") {
        won = true;
    }
    if (check4.className === "selected" && check9.className === "selected" && check13.className === "selected" && check18.className === "selected" && check23.className === "selected") {
        won = true;
    }
    if (check0.className === "selected" && check6.className === "selected" && check17.className === "selected" && check23.className === "selected") {
        won = true;
    }
    if (check4.className === "selected" && check8.className === "selected" && check15.className === "selected" && check19.className === "selected") {
        won = true;
    }
    if(won && alertM){
        alert("BINGO!");
    }
    return won;
}
function iWon() {
    alertM = false;
    var won = checkBingo(alertM);
    if (won) {
        let wins = localStorage.getItem("wins");
        parseInt(wins);
        wins++;
        localStorage.setItem("wins", wins);
        loadStorage();
        button1 = document.getElementById("i-won");
        button2 = document.getElementById("i-lost");
        button5 = document.getElementById("caller");
        buttonDissapear(button5);
        buttonDissapear(button1);
        buttonDissapear(button2);
        button3 = document.getElementById("new-game-random");
        button4 = document.getElementById("new-game-specified");
        buttonShow(button3);
        buttonShow(button4);
        deleteHTML();
    } else {
        alert("You do not have Bingo.")
    }
}
function iLost() {
    alert("YOU LOST!");
    deleteHTML();
    let losses = localStorage.getItem("losses");
    parseInt(losses);
    losses++;
    localStorage.setItem("losses", losses);
    loadStorage();
    button1 = document.getElementById("i-won");
    button2 = document.getElementById("i-lost");
    button5 = document.getElementById("caller");
    buttonDissapear(button5);
    buttonDissapear(button1);
    buttonDissapear(button2);
    button3 = document.getElementById("new-game-random");
    button4 = document.getElementById("new-game-specified");
    buttonShow(button3);
    buttonShow(button4);
}

function deleteHTML() {
    var bingoCard = document.getElementById("bingoCard");
    var c = bingoCard.firstChild;
    while (c) {
        bingoCard.removeChild(c);
        c = bingoCard.firstChild;
    }
    callerArray.length = 0;
    numbersArray.length = 0;
    var call = document.getElementById("call");
    call.remove();
}