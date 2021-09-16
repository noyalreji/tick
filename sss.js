// parent Dot class
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
// child Circle class
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
}
// we can now create Circles
const circle1 = new Circle(33, 33, 33);
// same attributes as a Dot, plus a radius
console.log(circle1);
// and Circles can access Dot methods
circle1.showLocation();

