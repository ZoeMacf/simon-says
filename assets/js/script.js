
/**
 * Creates a random pattern consisting of numbers 1-6 and adds them to pattern array.
 */
function createPattern(){
    let shape1 = document.getElementById('shape1');
    let shape2 = document.getElementById('shape2');
    let shape3 = document.getElementById('shape3');
    let shape4 = document.getElementById('shape4');
    let shape5 = document.getElementById('shape5');
    let shape6 = document.getElementById('shape6');
    let pattern = [shape1,shape2,shape3,shape4,shape5,shape6];
    //To create a random shuffle of the array, the Fisher Yates shuffle was used after researching the sort() method.
    for (let i = pattern.length -1; i > 0; i--) {
        let a = Math.floor(Math.random() * (i+1));
        let b = pattern[i];
        pattern[i] = pattern[a]
        pattern[a] = b;
    }
}

function displayPattern(){
    
}

function checkUserPattern(){
    
}

function addToCurrentScore(){
    
}

function createHighScore(){
    
}