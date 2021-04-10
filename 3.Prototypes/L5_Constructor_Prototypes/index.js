let myObj = {};

Object.getPrototypeOf(myObj);

// myObj.__proto__ -- parent of myObj

function Circle(radius) {
    this.radius = radius;
}
Circle.prototype // Object that will be used as parent for the child objects
const circle = new Circle(1);