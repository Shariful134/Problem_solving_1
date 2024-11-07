// Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.
{
  // ----------------------problem_1---------------------
  function repeatString(str: string, num: number) {
    return str.repeat(num);
  }
  // console.log(repeatString("Shariful: ", 3));

  // ----------------------problem_2---------------------
  //Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

  const findLargestNumber = (array: number[]) => {
    return Math.max(...array);
  };
  // console.log(findLargestNumber([12, 23, 3, 445, 6]));

  //-------------problem_3--------------
  //Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

  const filterEvenNumbers = (nums: number[]): number[] => {
    return nums.filter((num) => num % 2 == 0);
  };
  // console.log(filterEvenNumbers([12, 23, 45, 6]));

  //-------------problem_3--------------
  //Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

  // const reverseArray = <T>(array: T): T[] => {
  //   return [array];
  // };

  const reverseArray = <T>(array: T[]): T[] => {
    return array.reverse();
  };
  // console.log(reverseArray([12, 23, 45, 6]));

  //-------problem_5-----------------------
  //You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

  interface student {
    name: string;
    age: number;
    grades: number[];
  }

  const calculateAverageGrade = (param: student) => {
    const totalGrades = param.grades.reduce((accu, grade) => accu + grade, 0);
    return totalGrades / param.grades.length;
  };
  // console.log(
  //   calculateAverageGrade({
  //     name: "Shariful islam",
  //     age: 12,
  //     grades: [12, 23, 45, 23, 67],
  //   })
  // );

  // ---------------problem_6-----------------
  //You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const isRecentBook = (book: Book): boolean => {
    const CurrentYear = new Date().getFullYear();
    // console.log(CurrentYear);
    return CurrentYear - book.publishedYear >= 5;
  };
  // console.log(
  //   isRecentBook({ title: "bus", author: "this author", publishedYear: 2020 })
  // );

  //----------------problem_7-------------------
  // Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

  const logString = (param_1: unknown): void => {
    if (typeof param_1 === "string") {
      console.log(param_1);
    } else {
      console.error("Error: please enter the string");
    }
  };
  // console.log(logString({}));

  //---------------problem_8-------------------
  //Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

  class Car {
    constructor(
      public brand: string,
      public model: string,
      public year: number
    ) {}

    displayInfo() {
      return `Your Car model is ${this.model} and Car name is ${this.brand} purches Year: ${this.year}`;
    }
  }
  const car = new Car("BMW", "27W7", 2010);
  console.log(car.displayInfo());
}
