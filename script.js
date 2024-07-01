//                          STUDENT GRADE MANAGMENT SYSTEM

let student1 = {
  name: "Abc",
  id: "001",
  grade: {
    subject1: 70,
    subject2: 70,
    subject3: 70,
  },
};

let student2 = {
  name: "Bcd",
  id: "002",
  grade: {
    subject1: 93,
    subject2: 93,
    subject3: 93,
  },
};

let student3 = {
  name: "Cde",
  id: "003",
  grade: {
    subject1: 75,
    subject2: 75,
    subject3: 75,
  },
};

let student4 = {
  name: "Abc",
  id: "004",
  grade: {
    subject1: 90,
    subject2: 90,
    subject3: 90,
  },
};
let student5 = {
  name: "Abc",
  id: "005",
  grade: {
    subject1: 96,
    subject2: 96,
    subject3: 96,
  },
};

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

let student6 = {
  name: "Efg",
  id: "006",
  grade: {
    subject1: 96,
    subject2: 96,
    subject3: 96,
  },
};

let studentDetail = [
  { student1 },
  { student2 },
  { student3 },
  { student4 },
  { student5 },
];

function add() {
    let n = prompt("Enter Student name: ");
    let i = prompt("Enter Student id: ");
    let s1 = prompt("Enter Subject 1 grage")
    let s2 = prompt("Enter Subject 2 grage")
    let s3 = prompt("Enter Subject 3 grage")

    let temp ={
        name: n,
        id: i,
        grade: {
          subject1: s1,
          subject2: s2,
          subject3: s3,
        },
    }

    return studentDetail.push(temp)
}
add();
console.log(studentDetail);

function sub() {
    let x = prompt("kisko remove karna hai");
    return delete studentDetail[x-1];
}
sub();

console.log(studentDetail);
