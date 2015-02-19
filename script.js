var today = new Date();
var feierabend = new Date();

feierabend.setHours(17);
feierabend.setMinutes(0,0,0);

if (today.getHours() >= feierabend.getHours()) {
  document.addEventListener('DOMContentLoaded', setFeierabend);
} else {
  setTimeout(setFeierabend, feierabend - today);
}

function setFeierabend () {
  document.getElementById('isitfeierabend').innerHTML = 'JA! :)';
}
