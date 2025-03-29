// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter for circumference
    set circumference(circumference) {
      this.radius = circumference / (Math.PI * 2);
    }
  
    // Getter for area
    get area() {
      return Math.PI * this.radius ** 2;
    }
  
    // Setter for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  // Example Usage
  const circle = new Circle(5);
  console.log(circle.diameter); // 10
  console.log(circle.circumference); // 31.41592653589793
  console.log(circle.area); // 78.53981633974483
  
  circle.diameter = 20;
  console.log(circle.radius); // 10
  
  circle.circumference = 62.83185307179586;
  console.log(circle.radius); // 10
  
  circle.area = 314.1592653589793;
  console.log(circle.radius); // 10
  
  module.exports = Circle;
  