// Problem 1
function filterEvenNumbers(arr: number[]): number[] {
  const even = arr.filter((item) => item % 2 === 0);
  return even;
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2
function reverseString(value: string): string {
  const splitString = value.split("");
  const reversString = splitString.reverse();
  const joinString = reversString.join("");
  return joinString;
}

// console.log(reverseString("typescript"));

// Problem 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber) {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  }
}

// console.log(checkType(54));

// Problem 4

const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T, k extends keyof T>(obj: T, key: k) => {
  return obj[key];
};

// console.log(getProperty(user, "id"));

// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}

// const myBook = {
//   title: "TypeScript Guide",
//   author: "Jane Doe",
//   publishedYear: 2024,
// };

// console.log(toggleReadStatus(myBook));

// problem 6

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// const student = new Student("Alice", 20, "A")
// console.log(student.getDetails())


// problem 7



function getIntersection(arr1: number[], arr2: number[]) : number[]{
  const filter = arr1.filter(item => arr2.includes(item))
  return filter

}

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))