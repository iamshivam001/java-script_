class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}


const shivam = new User ("shivam.ai", "abc" )
console.log(shivam.password);
console.log(shivam.email)