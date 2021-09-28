describe('Thermostat', function() { 

  let thermostat; 

 it('thermostat is an instance of a Thermostat', function() {
  thermostat = new Thermostat();
  expect(thermostat).toBeInstanceOf(Thermostat);
 });

 it('is initialized with a temperature of 20 degrees', function() {
  thermostat = new Thermostat();
  expect(thermostat.temperature).toEqual(20);
 });

 it('increases the temperature', function() {
  thermostat = new Thermostat();
  thermostat.up(1);
  expect(thermostat.temperature).toEqual(21);
 });
 
 it('decreases the temperature', function() {
  thermostat = new Thermostat();
  thermostat.down(1);
  expect(thermostat.temperature).toEqual(19);
 });

});
