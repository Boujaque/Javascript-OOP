
// moidify the shape constructor and introduce a parameter
function Shape(color) {
  this.color = color; // this. will point the window property

}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}



function Circle(radius, color) {
 Shape.call(this, color);// call the super constructor for parent of 'this'.

  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
//reset the prototype constructure  as circleBase
Circle.prototype.constructor = Circle;



Circle.prototype.draw = function(){
  console.log('draw');
}



const s = new Shape();
const c = new Circle(1, 'red');
