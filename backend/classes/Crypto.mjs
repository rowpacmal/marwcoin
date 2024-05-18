export default class Crypto {
  constructor({ name, amount, value }) {
    this.name = name;
    this.amount = amount;
    this.value = value;
  }

  currentValue() {
    return this.value;
  }

  updateValue(newValue) {
    this.value = newValue;
  }

  calculateTotalValue() {
    return this.amount * this.value;
  }
}
