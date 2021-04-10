function Shape() {

}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}



function Circle(radius) {
  this.radius = radius;
}
//implicite relationship
//Circle.prototype = Object.create(Object.prototype);//objectBase
Circle.prototype = Object.create(Shape.prototype);

Object.create(Shape.prototype);

Circle.prototype.draw = function(){
  console.log('draw');
}

// Circle.prototype.duplicate = function() {
//   console.log('duplicate');
// }

// function Square() {

// }

// Square.prototype.diplicate = function() {

// }

const s = new Shape();
const c = new Circle(1);
