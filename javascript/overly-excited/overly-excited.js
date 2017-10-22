let sentence = "The walrus danced through the trees in the light of the moon";

let nextSentence = "Hello there this is a test of this function to see if it's working";

/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
/*
    The function now accepts a string and the string is split into an array within 
    the function
*/
let addExcitement = (nextSentence, mysterySymbol) => {    
    
    // Create an array that contains the words in the sentence
    let sentenceArray = nextSentence.split(" ");
    
    for (let i = 0; i < sentenceArray.length; i++) {
        
        let output = "";
        let devSymbol = "";
        
        for (let j = 0; j <= i; j++) {            
            if ((j + 1) % 3 === 0) {
                devSymbol += mysterySymbol;
                output += sentenceArray[j] + devSymbol + " ";
            } else {
                output += sentenceArray[j] + " ";
            }            
        }
        console.log(output);
    }
}

// Invoke the function and pass in the array
addExcitement(nextSentence, "*");
