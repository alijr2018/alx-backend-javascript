const carProperties = Symbol('carProperties');

export default class Car {
  constructor(brand, motor, color) {
    this[carProperties] = {
      _brand: brand,
      _motor: motor,
      _color: color,
    };
  }

  get brand() {
    return this[carProperties]._brand;
  }

  set brand(newBrand) {
    this[carProperties]._brand = newBrand;
  }

  get motor() {
    return this[carProperties]._motor;
  }

  set motor(newMotor) {
    this[carProperties]._motor = newMotor;
  }

  get color() {
    return this[carProperties]._color;
  }

  set color(newColor) {
    this[carProperties]._color = newColor;
  }

  cloneCar() {
    const { _brand, _motor, _color } = this[carProperties];
    return new this.constructor(_brand, _motor, _color);
  }
}
