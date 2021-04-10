const canEat = {
  eat:function() {
  this.hunger--;
  console.log('eating');
  }
};

const canWalk = {
  walk: function() {
  this.steps++;
  this.distance--;
  console.log('walking');
  }
}; 

const canSwim = {
  swim: function() {
  
  this.distance++;
  console.log('swiming');
  }
};

const p1 = Object.assign({},  canEat, canWalk);
console.log(p1);

// beter aproach
function Person() {
}

 Object.assign(Person.prototype,  canEat, canWalk);

 const p2 = new Person();
console.log(p2);

function Fish() {
}

Object.assign(Fish.prototype, canEat, canSwim);

const goldFish = new Fish();
console.log(goldFish);

// mak ite simpler with mixin function

function mixin(target, ... sources) {// '...' rest operator
 Object.assign(target, ...sources); // '...' spread operator
}

function Duck(){
}

mixin(Duck.prototype, canEat, canWalk, canSwim);

const donaldDuck = new Duck();
console.log(donaldDuck);