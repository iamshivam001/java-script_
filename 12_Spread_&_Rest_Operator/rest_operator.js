function addNumbers(a, b, c,...other) {
    // console.log(other[0]);
    return a + b + c;
  }
  
  const result = addNumbers(2, 4, 5, 8 , 9);
//   console.log(result);

  // Spread

  const names = ["shivam","virat","rohit"]

  function getNames(name1,name2,name){
    console.log(name1,name2,name);
  }

//   getNames(names[0],names[1],names[2])
  getNames(...names)
//   getNames(names)


// Object ke sath - Rest
const students = {
    name:  "shivam",
    age: "21",
    hobbies:[ "gym", "cricket"]
}

// const age = students.age;
const {age,...rest} = students;  // destructring
console.log(rest);
console.log(age);

// spread 

const newStudent= {
    ...students,
    age: '22',
}

console.log(newStudent);