let person = { name: 'Mosh'};

for(let key in person)
 console.log(key);
// only name is visible

console.log(Object.keys(person)) ;
// the same only name is visible
// Objects has atributes that prevent to be enumerated

let objectBase =  Object.getPrototypeOf(person);
//viewing the atributes attached to 'toString' method
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);
//{writable: true, enumerable: false, configurable: true, value: ƒ}
// configurable: true
// enumerable: false  -- that why cannot be enumerated the object properties
// value: ƒ toString()
// writable: true  -- we can overwrite this methodes
// __proto__: Object
// overwriting objectBase properties

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true
});

person.name = 'John';

console.log(person);// will display 'Mosh'

console.log(Object.keys(person));
// by defolt all atributes are true : writable, enumaable, configurable