let colourSequence = [];
let shape1 = document.getElementById('shape1');
let shape2 = document.getElementById('shape2');
let shape3 = document.getElementById('shape3');
let shape4 = document.getElementById('shape4');
let shape5 = document.getElementById('shape5');
let shape6 = document.getElementById('shape6');
let gameStart = document.getElementById('gameBtn');

function createPattern(colourSequence){
    for(let i = 0; i < 6; i++){
    let colourPicker = [shape1, shape2, shape3, shape4, shape5, shape6];
    let chosenColour = colourPicker[Math.floor(Math.random() * colourPicker.length)];
    colourSequence.push(chosenColour);
    }
    return colourSequence;

}

function displayPattern(colourSequence){
    let highlighted = colourSequence.classList;
    highlighted.add('active');
    return console.log(highlighted);
    
}

function checkUserPattern(){
    
}

function addToCurrentScore(){
    
}

function createHighScore(){
    
}

function runGame(){
    createPattern();
    displayPattern();
}

gameStart.addEventListener('click', runGame);