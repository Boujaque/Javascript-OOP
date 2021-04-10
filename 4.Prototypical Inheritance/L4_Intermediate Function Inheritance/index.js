function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// moidify the shape constructor and introduce a parameter
function Shape(color) {
  this.color = color; // this. will point the window property

}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

// Circle definition
function Circle(radius, color) {
 Shape.call(this, color);// call the super constructor for parent of 'this'.
  this.radius = radius;
}
//add drw method to Circle base
Circle.prototype.draw = function(){
  console.log('draw');
}

extend(Circle, Shape);


//Define Square function
function Square(size) {
  this.size = size;
}

extend(Square,Shape);

const s = new Shape();
const c = new Circle(1, 'red');
