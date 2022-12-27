// FIBONACCI WITH LOOP & ARRAY

const FibonacciLoopArray = (n) => {
    let arr = [0, 1];
    console.log('The starting array contains 0 and 1:', arr);
    console.log('For loop starts at 2 and will finish when it reaches the N-th iteration.');
    for (let i = 2; i <= n; i++) {
        console.log(`It's the ${i}.iteration. The value that will be pushed to the array equals ${arr[i-1]} + ${arr[i-2]} = ${arr[i-2]+arr[i-2]}.`)
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    console.log('The final result is:')
    return arr[n];
}

// If you want to see how the loop with the array progresses, uncomment the following code:

// console.log(FibonacciLoopArray(30))

// FIBONACCI ONLY WITH A LOOP

const FibonacciLoop = (n) => {
    if (n < 2) {
        return n;
    };
    let a = 0;
    let b = 1;
    console.log(`Before the loop starts the value of a is ${a} and the value of b is ${b}.`)
    for (let i = 2; i <= n; i++) {
        console.log(`This is the ${i}. iteration.`)
        b += a;
        a = b - a;
        console.log(`Now b equals ${b} and a equals ${a}.`)
    }
    console.log('The final result is:', b)
    return b;
}

// If you want to see how the loop progresses, uncomment the following code:

// console.log(FibonacciLoop(30))

// FIBONACCI USING RECURSION

const FibonacciRecursion = (n) => {
    if (n <= 1) {
        return n;
    } else {

        // Watch out: the following console.log might crash the browser or take a long time to load if the function is invoked with large numbers.
        // console.log(FibonacciRecursion(n - 2) + FibonacciRecursion(n - 1))
        return FibonacciRecursion(n - 2) + FibonacciRecursion(n - 1);
    }
}
// If you want to see how the recursion progresses, uncomment the following code:

// console.log(FibonacciRecursion(7));
// console.log(FibonacciRecursion(30));