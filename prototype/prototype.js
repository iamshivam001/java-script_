// agar ap ek class sy properties dusri class mai properties use kar paa rhe ho usai hum bolte hy inheritance 

// const object = new Object({
//     name: "Shivam"
// })

// const obj = new Obj():
const obj = {
    name: "shivam",
    getName: function() {
        return this.name
    },
     getRoll: function(){
        return this.roll;
    }
}

// console.log(obj);

const obj2 = {
    roll: 1,
    name: "Rohan",
    __proto__:obj   // mai yeah chahta ho jo mera pehla object hy wo object 2 mai as a prototype jaye 
}

// console.log(obj2.getRoll());

const obj3 = {
    class: "MCA",
    __proto__:obj2
}

// console.log(obj3);



const array = ["Rahul"]
console.log(array);

const objects = new Object ();
console.log(objects);

Array.prototype.show = function(){
    return this;
}

const cities = ["jammu"]
console.log(cities.show());

Array.prototype.convertIntoObject = function() {
    let newObj = {};
    this.forEach(element => {
        newObj[element] = element;
    })
    return newObj;
}

console.log(cities.convertIntoObject());

function MyPrototype(name, roll){
    this.name = name;
    this.roll=roll;
}

MyPrototype.prototype=obj;

const nyproto = new MyPrototype("Priyanka",21);
console.log(nyproto.getRoll());