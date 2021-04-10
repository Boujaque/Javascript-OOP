class Shape {  
   move() {
      console.log('move');
   }
}

class Circle extends Shape {  
   move() {
      super.move();// calling the methos from parrent
      console.log('circle move');// method from child is called first
   }
}

const c = new Circle();
