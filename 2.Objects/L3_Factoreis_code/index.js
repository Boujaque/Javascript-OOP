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

