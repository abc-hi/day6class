class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    console.log(`Circle [radius=${this.radius}, color=${this.color}]`);
  }
}

// Example usage:
const myCircle = new Circle();
console.log(`Radius: ${myCircle.getRadius()}`);
console.log(`Color: ${myCircle.getColor()}`);
console.log(`Area: ${myCircle.getArea()}`);
console.log(`Circumference: ${myCircle.getCircumference()}`);

myCircle.setRadius(2.5);
myCircle.setColor("blue");

console.log(`Updated Radius: ${myCircle.getRadius()}`);
console.log(`Updated Color: ${myCircle.getColor()}`);
console.log(`Updated Area: ${myCircle.getArea()}`);
console.log(`Updated Circumference: ${myCircle.getCircumference()}`);

myCircle.toString();
