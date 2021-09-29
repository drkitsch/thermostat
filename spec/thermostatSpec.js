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




});