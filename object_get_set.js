const User = {
    _email: "shivam@123",
    _password: "abc",


get email() {
    return this._email.toUpperCase()
},
set email(value) {
    this.email = value
}
}

const tea = Object.create(User)
console.log(tea.email);