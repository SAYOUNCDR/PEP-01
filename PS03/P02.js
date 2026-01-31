let arr = [2, 3, 4, 5, 6];


function squareArrayElements(inputArray) { 
    let sq = [];

    for (let i = 0; i < inputArray.length; i++) {
        sq.push(inputArray[i] * inputArray[i]);
    }

    return sq;
}

console.log(squareArrayElements(arr));