function Circle(radius)  {
    console.log("this: ", this);
    this.radius = radius
    this.draw = function() {
        console.log("draw")
    }
}

const circle = new Circle(10);
console.log("*****************")
for(let key in circle) {
    console.log(key);
};
// using bracket notation
console.log("*****************")
for(let key in circle) {
    console.log(key, circle[key]);
};

// using typeof property
console.log("*****************")
for(let key in circle) {
    if(typeof circle[key] !== 'function')
    console.log(key, circle[key]);
};
// returning key from an object as aarray
console.log("*****************")
const keys = Object.keys(circle);
console.log(keys);
// with approach we acnnot separate propertie from methods
console.log("*****************")
if ('radius' in circle)
console.log("Circle has a radius.");

