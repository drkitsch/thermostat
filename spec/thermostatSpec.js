describe('Thermostat', function() { 

  let thermostat; 

 it('thermostat is an instance of a Thermostat', function() {
  thermostat = new Thermostat();
  expect(thermostat).toBeInstanceOf(Thermostat);
 });

 it('is initialized with a temperature of 20 degrees', function() {
  thermostat = new Thermostat();
  expect(thermostat.temperature).toEqual(20)
 });

});
