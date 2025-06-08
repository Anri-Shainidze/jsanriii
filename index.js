// const myObject = { a: 1, b: 2, c: 3 };
// const result = objectToPairs(myObject);

// console.log(result);
// Output: [['a', 1], ['b', 2], ['c', 3]]



// function haveSameKeys(obj1, obj2) {
//   const keys1 = Object.keys(obj1).sort();
//   const keys2 = Object.keys(obj2).sort();

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let i = 0; i < keys1.length; i++) {
//     if (keys1[i] !== keys2[i]) {
//       return false;
//     }
//   }

//   return true;
// }


// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const obj3 = { d: 5 };

// const merged = mergeObjects(obj1, obj2, obj3);

// console.log(merged);
// // Output: { a: 1, b: 3, c: 4, d: 5 }


// function deleteKey(obj, key) {
//   delete obj[key];
//   return obj;
// }


// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   getInfo() {
//     return `${this.year} ${this.make} ${this.model}`;
//   }
// }
// const myCar = new Car('Toyota', 'Camry', 2021);

// console.log(myCar.make); 
// console.log(myCar.model);  
// console.log(myCar.year);   
// console.log(myCar.getInfo());



// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }

//   getPerimeter() {
//     return 2 * (this.width + this.height);
//   }

//   isSquare() {
//     return this.width === this.height;
//   }
// }
