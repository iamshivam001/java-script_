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

function adder(num){
    function add(b) {
        console.log(num + b);
    }
    return add;
}


const addderTo5 = adder(5)
addderTo5(2);

const addderTo10 = adder(10)
addderTo10(5);


