
//question1
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  const myCar = new Model("Ford", "Mustang");
  document.getElementById("inherit").innerHTML = myCar.show();

  //question2
  const o = {
    a: 1,
    b: 2,
    __proto__: {
      b: 3,
      c: 4,
      __proto__: {
        d: 5,
      },
    },
  };
  
  
  console.log(o.d);

  //question 3
  Array.prototype.sum = function () {
    let sum =0;
    for(let i=0;i<this.length;i++){
        sum+=this[i];
    }
    return sum;
}

let Array1 = [10, 50, 70, 80];
let Array2 = [-2, -3, -4, -5];
let Array3 = [20, 20.20, 40.20, -5, 120];

console.log("sum of first Array : "+Array1.sum());
console.log("sum of second Array : "+Array2.sum());
console.log("sum of third Array : "+Array3.sum());



  //question4
  function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Sara")));
