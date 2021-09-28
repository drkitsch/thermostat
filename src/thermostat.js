class Thermostat {

  constructor(temperature) { 
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10
  }

   up(number) {
    return this.temperature += number;
  }

 down(number) {
  if (this.temperature < this.MINIMUM_TEMPERATURE) {
    throw new Error('Minimum temperature passed');
    } else {
      return this.temperature -= number;
    }
  }

}

