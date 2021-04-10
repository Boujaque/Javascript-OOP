
//Value Types Primitives:
 Number, String, Boolean, Symbol, undefined, null
// Reference type/Objects: Object, Function, Array

let x = 10;
let y = x;

x = 20;

// x, y are completly independent
// x = 20, y = 10

let a = { value: 10};
let b = a;

a.value =  20;
// b -- {value: 20}
// a --> {value: 20}

let number = 10;
function increase(number) {
    number++;
}

increase(number);
console.log("increased number: "+number);

let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log("increased obj.value: "+obj.value);