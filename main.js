// FOR LOOP & RECURSION - SUMMING UP THE FIRST N NUMBERS OF A GIVEN ARRAY

const loop = (arr, n) => {
    let result = 0;
    console.log('FOR LOOP')
    console.log('The sum at the beginning:', result)
    for (let i = 0; i < n; i++) {
        result += arr[i];
        console.log(`The sum at the ${i}. iteration is ${result}.`)
    }
    return result;
};

const loopReplacement = (arr, n) => {
    if (n <= 0) {
        console.log('The number reached 0.')
        return 0;
    } else {
        console.log('Calling loopReplacement function again.')
        return loopReplacement(arr, n - 1) + arr[n - 1]
    }
};

const exampleArray = [2, 4, 6, 7, 232];

// If you want to see the process in the console, uncomment the following:

// console.log('Example use of loop & recursion. Summing up 5 first numbers of the following array:', exampleArray)
// console.log('For loop sum:', loop(exampleArray, 5));
// console.log('Recursion sum:', loopReplacement(exampleArray, 5))

// RECURSION - COUNTDOWN FROM A GIVEN NUMBER

const countdown = (n) => {
    if (n < 0) {
        ('N is a negative number.')
        return []
    } else {
        return [n, ...countdown(n - 1)]
    }
}

// If you want to see the countdown in the console, uncomment the following:

// console.log('Countdown using recursion from 10 to 0:', countdown(10));
