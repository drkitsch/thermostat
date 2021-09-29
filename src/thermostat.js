class Thermostat {

  constructor() { 
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode = true;
  }

  getCurrentTemperature() { 
    return this.temperature;
  }

  isMinimumTemperature() {
    return this.temperature == this.MINIMUM_TEMPERATURE; 
  } 

  up() {
    return this.temperature += 1;
  }

  down() {
    if (this.isMinimumTemperature()) { 
    return; 
  } 
    this.temperature -= 1
  }

  isPowerSavingModeOn() { 
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOff() {
  this.powerSavingMode = false;
  }
  
}





