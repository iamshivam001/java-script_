// function add(a, b) {
//     return a + b;
// }

// function square(val) {
//     return val * val ;
// }

// function multiply(a,b) {
//     return a * b ;
// }


// const addResult = add(2,3);
// console.log(square(addResult));


// function addTwoandSquare (a,b){
//     return square(add(a,b));
// }
// console.log(addTwoandSquare(2,3));


// function composeTwoFunction(fn1,fn2) {
//     return function (a, b ) {
//         return fn2(fn1(a,b));
//     };
// }

// const task = composeTwoFunction(multiply , square);
// console.log(task(5,3));


// change it in this ECHME6 or Modern javascript 



// const c2f = (fn1,f2) => (a,b) => f2(fn1(a,b));

// const task = c2f(multiply , square);
// console.log(task(5,3));


// how you can compose unlimited function 
function add(a, b) {
    return a + b;
}

function square(val) {
    return val * val ;
}

function multiply(arg) {
    return arg[0] * arg[1] ;
}


function compose(...fns) {
    return function(...values) {
      return  fns.reduceRight((a,b) => b(a), values);
    }
}

const c2f = (fn1,f2) => (a,b) => f2(fn1(a,b));




const task = c2f(multiply , square);
console.log(task(5,3));

