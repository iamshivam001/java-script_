const user = {
    username: "shivam",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
    }
}
 
// console.log(user.loginCount);
console.log(user.getUserDetails());