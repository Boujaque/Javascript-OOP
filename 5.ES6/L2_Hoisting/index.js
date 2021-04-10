//calling functions
sayHello(); // ok function hoisted on top on compilation
// sayGoodBye(); //error
// console.log(number); // error


//Function Declaration
function sayHello() {} // with function declaration we don't add ';'
                       // function declaration are hoisted , moved on top of the cod
//Function Expression
const sayGoodBye = function() {}; // by convention we add ';' on the end.
const number = 1;// expression
                 // function expression are nort hoisted, must be called after definition.

// Classes are not hoisted
// const  c = new Circle();// error 
// const s = new Square();

//Class declaration 
class Circle{
}

//Class Expression
const Square = class{
};

const  c = new Circle();
const s = new Square();