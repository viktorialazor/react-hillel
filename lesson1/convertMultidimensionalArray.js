const someArray = [1, 2, [3, 4, [5], 8], 9];

console.log('One-dimensional array', convertMultidimensionalArray(someArray));

function convertMultidimensionalArray(arr) {
    let result = [];
    
    arr.forEach((item) => {      
        !Array.isArray(item) 
            ? result.push(item) 
            : result = result.concat(convertMultidimensionalArray(item));
    });

    return result;
};
