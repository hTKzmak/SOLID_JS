// Принцип единственной обязанности (Single Responsibility Principle - SRP)
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  // Принцип открытости/закрытости (Open/Closed Principle - OCP)
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // Принцип подстановки Барбары Лисков (Liskov Substitution Principle - LSP)
  class Shape {
    getArea() {
      throw new Error("Метод должен быть переопределен в наследниках.");
    }
  }
  
  // Принцип разделения интерфейса (Interface Segregation Principle - ISP)
  class VolumeCalculatable {
    getVolume() {
      throw new Error("Метод должен быть переопределен в наследниках.");
    }
  }
  
  class Cube extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    getArea() {
      return 6 * Math.pow(this.sideLength, 2);
    }
  }
  
  class Sphere extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return 4 * Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // Принцип инверсии зависимостей (Dependency Inversion Principle - DIP)
  class VolumeCalculator {
    constructor(shapes) {
      this.shapes = shapes;
    }
  
    getTotalVolume() {
      return this.shapes.reduce((total, shape) => {
        if (shape instanceof VolumeCalculatable) {
          return total + shape.getVolume();
        } else {
          throw new Error("Невозможно вычислить объем для данной фигуры.");
        }
      }, 0);
    }
  }



