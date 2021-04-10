
function Circle(radius)  {
    console.log("this: ", this);
    this.radius = radius
    this.draw = function() {
        console.log("draw from constrcutor")
    }
}

const another = new Circle(2);
another.draw();

// Functions are obbjects
// Circle. has all properies and methods as object

// in console
// Circle.name --> "Circle"
// Corcle.length --> 1
// Circle.constructor --> f Function() { [native code] }

const Circle1 = new Function('radius', `
console.log("this Object: ", this);
this.radius = radius
this.draw = function() {
    console.log("draw from Function-Object")
}
`);

const circle = new Circle1(3);
circle.draw();

// call method for calling a function:
Circle.call({}, 5)  // this the same with expresion  const another = new Circle(5);
 // {} is referencing this.
 Circle.apply({}, [1, 2, 3])