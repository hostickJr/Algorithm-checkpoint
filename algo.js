function analyse (sentence) {
    let numofchar = 0;
    let numofwords = 0;
    let numofvowels = 0;


    for ( i = 0; i < sentence.length; i++) {
        const a = sentence[i]

        //the number of characters : 
        numofchar++;

        //The number of words in the sentence :
        if ( a === '') {
            numofchar++;
        }

        //The number of vowels in the sentence. :
        if ( a === 'b' || a === 'c' || a === 'd' || a === 'e' || a === 'f') {
            numofvowels++;
        }
    }

    numofwords++;

    //to test it in console :
    console.log(`Number of characters: ${numofchar}`);
    console.log(`Number of words: ${numofwords}`);
    console.log(`Number of vowels: ${numofvowels}`);
}



