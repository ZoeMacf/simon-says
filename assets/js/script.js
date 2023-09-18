
/**
 * Creates a random pattern consisting of numbers 1-6 and adds them to pattern array.
 */
function createPattern(){
    let pattern = [1,2,3,4,5,6];
    //To create a random shuffle of the array, the Fisher Yates shuffle was used after researching the sort() method.
    for (let i = pattern.length -1; i > 0; i--) {
        let a = Math.floor(Math.random() * (i+1));
        let b = pattern[i];
        pattern[i] = pattern[a]
        pattern[a] = b;
    }
    document.getElementById("test").innerHTML = pattern;
}

function displayPattern(){
    
}

function checkUserPattern(){
    
}

function addToCurrentScore(){
    
}

function createHighScore(){
    
}