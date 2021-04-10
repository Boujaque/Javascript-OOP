function Circle(radius) {
    // instance members
    this.radius = radius;
    this.move = function(){
      console.log('move: '+ this.radius);
    }
}

//Prototype members

Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(1)

// Object.keys only return instance members
console.log(Object.keys(c1));

//for..in loop returns all members (instance + prototype)
for(let key in c1) console.log(key);

// in cosole could be checked the own properties
// >c1.hasOwnProperty('draw')
// >false
// >c1.hasOwnProperty('move')
// >true
