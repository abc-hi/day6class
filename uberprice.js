class UberCalculator {
  constructor(baseFare, costPerMile, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerMile = costPerMile;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distance, duration) {
    const fare = this.baseFare + (distance * this.costPerMile) + (duration * this.costPerMinute);
    return fare;
  }
}

// Example usage:
const uberX = new UberCalculator(5, 1.5, 0.2); // Example rates for UberX
const distanceTraveled = 10; // in miles
const tripDuration = 20; // in minutes

const totalPrice = uberX.calculatePrice(distanceTraveled, tripDuration);
console.log(`The total Uber price is $${totalPrice.toFixed(2)}`);
