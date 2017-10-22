let sentence = "The walrus danced through the trees in the light of the moon";

// Create an array that contains the words in the sentence
let sentenceArray = sentence.split(" ");

/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {    
    for (let i = 0; i < theWordArray.length; i++) {
        
        let output = "";
        let exclamationMark = "";
        
        for (let j = 0; j <= i; j++) {            
            if ((j + 1) % 3 === 0) {
                exclamationMark += "!";
                output += theWordArray[j] + exclamationMark + " ";
                // process.stdout.write(theWordArray[j] + exclamationMark + " ");
            } else {
                output += theWordArray[j] + " ";
                // process.stdout.write(theWordArray[j] + " ");
            }            
        }
        console.log(output);
    }
}

// Invoke the function and pass in the array
addExcitement(sentenceArray);