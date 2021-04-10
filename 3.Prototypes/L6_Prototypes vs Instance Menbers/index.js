function Circle(radius) {
    // instance members
    this.radius = radius;

    // this.draw = function(){
    //     console.log('draw' + radius);
    // }

    this.move = function(){
        this.draw(); // calling parrent object method
            console.log('move: '+ this.radius);
        }
}

const c1 = new Circle(1);
const c2 = new Circle(2);

// both c1 and C2 contain the method draw
//Moving the method draw in th parent object 



//overwriting 'toString'

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}

console.log(c1.toString());
console.log(c2.toString());


//Prototype members
//calling members
Circle.prototype.draw = function() {
    // this.move(); -- calling chiled method 
    console.log('draw: ' + this.radius);
}

