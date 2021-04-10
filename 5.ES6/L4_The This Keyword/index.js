'use strict';

const Circle = function() {
   this.draw = function() {
      console.log(this);
   }
}

const c = new Circle();
//method call
c.draw();

const draw = c.draw;
console.log(draw);
//function call
draw();// stand alone function that is not part of an object
// 'this.' will point the globall object.
//strict mode will restrict the acces to the global object
//enable strict mode 'use strict'
//function call will be set to undefined

class Square {
   draw(){
      console.log(this);
   }
}
const s = new Square();
s.draw();
const drawSquare = s.draw;
console.log(drawSquare);
drawSquare();
