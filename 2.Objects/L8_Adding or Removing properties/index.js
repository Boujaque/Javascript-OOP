function Circle(radius)  {
    console.log("this: ", this);
    this.radius = radius
    this.draw = function() {
        console.log("draw")
    }
}

const circle = new Circle(10);
// adding a new method with dot notation
circle.location = { x: 1};
// other way to ad a method with bracket notation
circle['location'] = {
    x: 1,
    y: 2
};

// bracket notation is useful when we want to operate it dinamicaly

const propertyName = 'location';

circle[propertyName] = {
    x: 1,
    y: 2
};
// bracket notation is useful when methods name  have spacial characters or spaces
const propertyName = 'center location';

// other use case  is when we want to dinamicaly delete properties that we don't want to sent o client
delete circle.location;
delete circle['loaction'];
delete circle[propertyName]
