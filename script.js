//                          STUDENT GRADE MANAGMENT SYSTEM

let student1={
    name:"Abc",
    id: "001",
    grade:"B+",
}
const grade001={
    subject1:70,
    subject2:70,
    subject3:70,
}
let student2={
    name:"Bcd",
    id: "002",
    grade:"A+",
}
const grade002={
    subject1:93,
    subject2:93,
    subject3:93
}
let student3={
    name:"Cde",
    id: "003",
    grade:"B",
}
const grade003={
    subject1:75,
    subject2:75,
    subject3:75
}
let student4={
    name:"Abc",
    id: "004",
    grade:"A",
}
const grade004={
    subject1:90,
    subject2:90,
    subject3:90
}
let student5={
    name:"Abc",
    id: "005",
    grade:"A+",
}
const grade005={
    subject1:96,
    subject2:96,
    subject3:96
}
// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);
// console.log(student5);

// console.log(grade001);
// console.log(grade002);
// console.log(grade003);
// console.log(grade004);
// console.log(grade005);

let student6={
    name:"Efg",
    id: "006",
    grade:"B",
}



let studentDetail=[{student1},{student2},{student3},{student4},{student5}]
console.log(studentDetail);

function add(student){
    studentDetail =studentDetail.push({student6})
    return studentDetail;  
}
add()
console.log(studentDetail);



function sub(student){
   delete studentDetail[5]
    return studentDetail;    
}
sub()
console.log(studentDetail);