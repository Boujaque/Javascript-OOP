//Object creation with  Factory function

function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('draw by factory')
        }
    };
    
}

const circle = createCircle(1);
circle.draw();

// Constructor Function
function Circle(radius)  {
    console.log("this: ", this);
    this.radius = radius
    this.draw = function() {
        console.log("draw from constrcutor")
    }
}
const another = new Circle(2);
another.draw();

// every object in java script has  property named constructor
console.log('another.constructor')
console.log('circle.constructor')
//creating an object literal will involve a constructor function
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1,2,3...
