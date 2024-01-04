const carData = Symbol('carData');

export default class Car {
  constructor(brand, motor, color) {
    this[carData] = {
      _brand: brand,
      _motor: motor,
      _color: color,
    };
  }

  get brand() {
    return this[carData]._brand;
  }

  set brand(newBrand) {
    this[carData]._brand = newBrand;
  }

  get motor() {
    return this[carData]._motor;
  }

  set motor(newMotor) {
    this[carData]._motor = newMotor;
  }

  get color() {
    return this[carData]._color;
  }

  set color(newColor) {
    this[carData]._color = newColor;
  }

  cloneCar() {
    const { _brand, _motor, _color } = this[carData];
    return new this.constructor(_brand, _motor, _color);
  }
}
