//  Problem Statement of Call 

// const UserDetails = {
//     name: "Shivam Gupta",
//     age: 21,
//     designation: "Front-End-Developer",
//     printDetails: function() {
//         console.log(this.name);   // this keyword is used for self referencing
//     }
// }

// UserDetails.printDetails();


// const UserDetails2 = {
//     name: "Rohan Gupta",
//     age: 24,
//     designation: "Front-End-Developer",
    
// }
// // function borrowing
// UserDetails.printDetails.call(UserDetails2);


// ab maan lo agar wo line no 7 wala function bahar hota toh
const UserDetails = {
    name: "Shivam Gupta",
    age: 21,
    designation: "Front-End-Developer",
}

printDetails = function(state, country) {
    console.log(this.name + " " + state + " " + country);
}

// printDetails.call(UserDetails, "Jammu" , "India")

const UserDetails2 = {
    name: "Rohan Gupta",
    age: 24,
    designation: "Front-End-Developer",
    
}
// function borrowing
// printDetails.call(UserDetails2, "Jammu", "India");

// apply
printDetails.apply(UserDetails2, ["Delhi", "India"]); 

// bind
let newFun = printDetails.bind(UserDetails, "Jammu" , "India")
newFun();

// in bind we can create a copy of our function and we can invoke later 