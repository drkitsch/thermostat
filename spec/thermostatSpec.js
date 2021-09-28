describe('Thermostat', function() { 

  let thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });

 it('thermostat is an instance of a Thermostat', function() {
  expect(thermostat).toBeInstanceOf(Thermostat);
 });

 it('is initialized with a temperature of 20 degrees', function() {
  expect(thermostat.temperature).toEqual(20);
 });

 it('increases the temperature', function() {
  thermostat.up(1);
  expect(thermostat.temperature).toEqual(21);
 });
 
 it('decreases the temperature', function() {
  thermostat.down(1);
  expect(thermostat.temperature).toEqual(19);
 });

});
