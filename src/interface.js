document.addEventListener("DOMContentLoaded", function() {



   const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    if (thermostat.energyUsage() === 'low-usage') {
      document.querySelector('#temperature').style.color = 'green';
    } else if (thermostat.energyUsage() === 'medium-usage') {
      document.querySelector('#temperature').style.color = 'black';
    } else {
      document.querySelector('#temperature').style.color = 'red';
    }
  }
  
  const thermostat = new Thermostat();
  document.querySelector('#temperature').innerText = thermostat.temperature;

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
  updateTemperature();
  });

  document.querySelector('#powersaving-off').addEventListener('click', function() {
  thermostat.switchPowerSavingModeOff();
  document.querySelector('#power-saving-status').innerText = 'off';
  updateTemperature();
  });

  const selectElement = document.querySelector('#current-city'); 
  selectElement.addEventListener('change', (Event) => {
    const city = Event.target.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=572fec089d6ffda715a4083583171d67&units=metric`
 
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      document.querySelector('#current-temperature').innerText = data.main.temp;
    });
  });
  
});

