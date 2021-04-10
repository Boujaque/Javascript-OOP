function Circle(radius)  {
    console.log("this: ", this);
    let color = "red";
    this.radius = radius;

    let defaultLocation = {x:0, y: 0}; // defined private  members
    let computeOptimumLocation = function() {
        //...
    }
// scope and closure relationship
    this.draw = function() {
        computeOptimumLocation();
        console.log("draw")
        // defaultLocation
        // color
    }
}

const circle = new Circle(10);
// circle.defaultLocation =  false; will mess-up the example
//implementing abstarction need to hide the details of implementation and to not let them to be avilable from outside.
 circle.draw();
 circle.radius;