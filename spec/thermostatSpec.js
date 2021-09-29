describe('Thermostat', function() { 

  let thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });

 it('thermostat is an instance of a Thermostat', function() {
  expect(thermostat).toBeInstanceOf(Thermostat);
 });

 it('is initialized with a temperature of 20 degrees', function() {
  expect(thermostat.getCurrentTemperature()).toEqual(20);
 });

 it('increases the temperature', function() {
  thermostat.up();
  expect(thermostat.getCurrentTemperature()).toEqual(21);
 });
 
 it('decreases the temperature', function() {
  thermostat.down();
  expect(thermostat.getCurrentTemperature()).toEqual(19);
 });

 it('has a minimum of 10 degrees', function() { 
  for (let i = 0; i < 11; i++) { 
    thermostat.down();
  }
  expect(thermostat.getCurrentTemperature()).toEqual(10); 
}); 

 it('has power saving mode on by defaut', function() { 
   expect(thermostat.isPowerSavingModeOn()).toBe(true);
});

 it('can switch PSM mode off', function() {
   thermostat.switchPowerSavingModeOff(); 
   expect(thermostat.isPowerSavingModeOn()).toBe(false);
 });

 it('can switch PSM mode back on', function() { 
  thermostat.switchPowerSavingModeOff(); 
  expect(thermostat.isPowerSavingModeOn()).toBe(false); 
  thermostat.switchPowerSavingModeOn();
  expect(thermostat.isPowerSavingModeOn()).toBe(true);
 });

 describe('when power saving mode is on', function() { 
  it('has a maximum temperature of 25 degrees', function() { 
  for (let i = 0; i < 6; i++) {
  thermostat.up(); 
  }
  expect(thermostat.getCurrentTemperature()).toEqual(25);
  });
 });

 describe('when power saving mode is off', function() {
   it('has a maximum temperature of 32 degrees', function() {
   thermostat.switchPowerSavingModeOff(); 
   for(let i = 0; i < 13; i++) {
     thermostat.up();
   }
   expect(thermostat.getCurrentTemperature()).toEqual(32);
   });
 });

 it('can be reset to the default temperature', function() {
   for (let i = 0; i < 6; i++) {
   thermostat.up();
   }
   thermostat.resetTemperature();
   expect(thermostat.getCurrentTemperature()).toEqual(20);
 });



});