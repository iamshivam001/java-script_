// function main() {
//     const name = 'Shivam Gupta';

//     function sayMyname() {
//         console.log(name);
//     };

//     // sayMyname();
//     return sayMyname;
// }

// let fn = main();
// fn();

// function adder(num){
//     function add(b) {
//         console.log(num + b);
//     }
//     return add;
// }


// const addderTo5 = adder(5)
// addderTo5(2);

// const addderTo10 = adder(10)
// addderTo10(5);


// Closure 

let sum = function (a) {
    console.log("Hello vIEWERS" +a);
    let c = 4;
    return function (b) {
        return a + b + c;
    }
}
//closure sy mujey yeah samaj aya ki agar ek baar ek function call ho aye toh uski value lost nhi hoti retain rehti hy 

const store = sum(2); // calling
console.log(store(5));

// another example of closure

const sum1 = function(x,y,z){
    return {
        getSumTwo: function() {
            return x+y;
        },
        getSumThree: function() {
            return x+y+z;
    }
}
}

const store1 = sum1(3,4,5);
console.log(store1.getSumTwo());

