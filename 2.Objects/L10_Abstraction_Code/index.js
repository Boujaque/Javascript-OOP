function Circle(radius)  {
    console.log("this: ", this);
    this.radius = radius;

    this.defaultLocation = {x:0, y: 0};
    this.computeOptimumLocation = function() {
        //...
    }

    this.draw = function() {
        this.cpmputeOptimumLocation();
        console.log("draw")
    }
}

const circle = new Circle(10);
// circle.defaultLocation =  false; will mess-up the example
//implementing abstarction need to hide the details of implementation and to not let them to be avilable from outside.
