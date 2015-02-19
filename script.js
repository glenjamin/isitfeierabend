var today = new Date();

var hours = today.getHours();

document.addEventListener("DOMContentLoaded", function(event) {
  if (hours >= 18) {
    document.getElementById('isitfeierabend').innerHTML = 'JA! :)';
  }
});