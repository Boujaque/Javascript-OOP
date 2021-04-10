class Circle {
     constructor(radius) {
        this.radius = radius;
    }
    // Instance Method
    draw() {
    }  
    //Static Method
    static parse(str)  {
       const radius = JSON.parse(str).radius;
       return new Circle(radius);
    }
}

const circle1 = new Circle(1);
console.log(circle1) 
// Circle.parse();// to work with a static method we 
// don't need to create an instance of the class

const circle2 = Circle.parse('{ "radius": 3 }');
console.log(circle2) 

class Math2 {
   static abs(value){
      //...
   }
}

Math2.abs()