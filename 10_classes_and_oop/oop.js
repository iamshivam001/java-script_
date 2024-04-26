const user = {
    username: "shivam",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}
 
// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date   // yeah jo new hy is mai yeah hy constructor function yeah karta kya hy ek hi object literal sy 
// multiple istances bana skte ho par promise k case mai new instances hi chahiye purani values ko affect nhi kar skte 3

function User(username, loginCount, isLogin) {
    this.username = username ;  // left hand side variable hy right hand side vali valuse hy jo ap pass krke dy rhe ho
    this.loginCount = loginCount;
    this.isLogin = isLogin;

    this.greeting = function() {
        // console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Shivam",12,true)
// const userTwo = new User("Rohan",26,False)
// console.log(userOne);
//     console.log(userOne.constructor);
//jab bhi ap new keyword likhte ho to empty object create hota hy jisko ap instances bolte ho 
// constructor function call hota hy new keyword k karan argument warega usmai pack krke humko dy deta hy 
// this keyword jo bhi apne argument likhe hy wo usmai inject ho jate hy 
// apko mil jata hy function k andar


const map = new Map();
map.set ('IN' , "INDIA")
map.set ('DE' , "GERMANY")
map.set ('FR' , "FRANCE")

for (const [key, value] of map) {
    console.log(key, ':-', value);
}




