// function add (a) {
//     return function(b){
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(add(4)(6)(7));

// function sendAutoEmail(to){
//     return function(subject){
//         return function(body) {
//             console.log(`Sending email to ${to} with subject ${subject}: ${body}`);
//         };
//     };
// }

const sendAutoEmail = to => subject => body => console.log(`Sending email to ${to} with subject ${subject}: ${body}`);

let step1 = sendAutoEmail("xyz@xyz.com")
let step2 = step1(`New Order Confirmation`)
step2(`hy shivam, here is something for you`)