
const _radius = Symbol();
const _draw = Symbol();

class Circle{
   constructor(radius) {
      // this._radius = radius;
      // this['radius'] = radius;
      this[_radius] = radius;

   }

   [_draw](){
   
   }
}

const c = new Circle(1);
// c.radius// public properties

//1. first aproach : using _ on the name
// c._radius = radius

//2. using primitive type Symbol
// when we cal the symbol function we get an unick identifier.
// Symbol() === Symbol() is false

// c._radius = radius;
// calling the private  functions
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);

//3. 





