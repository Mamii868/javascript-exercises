const convertToCelsius = function(temp) {
  let celcius = ((temp - 32) * (5 / 9))
  if (Number.isInteger(celcius)) {
    return Number(celcius)
  } else if (!Number.isNaN(celcius)){
    celcius = celcius.toFixed(1)
    return Number(celcius)
  } else {
    celcius = "ERROR"
    return "ERROR"
  } 
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = ((temp * (9 / 5)) + 32)
  if (Number.isInteger(fahrenheit)){
    return Number(fahrenheit)
  } else if (!Number.isNaN(fahrenheit)){
    fahrenheit = fahrenheit.toFixed(1)
    return Number(fahrenheit)
  } else {
    fahrenheit = "ERROR"
    return "ERROR"
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
