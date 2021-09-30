document.addEventListener("DOMContentLoaded", function() {

  const updateTemperature = function() {
    document.querySelector('#temperature').innerText = thermostat.temperature;
  }
  
  const thermostat = new Thermostat();
  document.querySelector('#temperature').innerText = thermostat.temperature 

  document.querySelector('#temperature-up').addEventListener('click', function() {
  thermostat.up();
  updateTemperature();
  });

  document.querySelector('#temperature-down').addEventListener('click', function() {
  thermostat.down();
  updateTemperature();
  });

  document.querySelector('#temperature-reset').addEventListener('click', function() {
  thermostat.resetTemperature();
  updateTemperature();
  });
  
  document.querySelector('#powersaving-on').addEventListener('click', function() {
  thermostat.switchPowerSavingModeOn();
  document.querySelector('#power-saving-status').innerText = 'on'; 
  
  });

  document.querySelector('#powersaving-off').addEventListener('click', function() {
  thermostat.switchPowerSavingModeOff();
  document.querySelector('#power-saving-status').innerText = 'off';
  
  });
  

});