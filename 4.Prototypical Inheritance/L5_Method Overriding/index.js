function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {  
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle() {
}

extend(Circle, Shape);
// important to be after extending the prototype constructor
Circle.prototype.duplicate = function() {
  Shape.prototype.duplicate() // in case we want to call the prototype  'duplicate' methode
  // alternative syntaxe
  Shape.prototype.duplicate.call(this);
  console.log('duplicate circle');// will show the implementation from the child because is  first in the chain

}

const c = new Circle();
