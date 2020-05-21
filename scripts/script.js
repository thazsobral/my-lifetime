var now
var dateOfBirth
var diference
var seconds
var minutes
var hours
var days
var weeks
var months
var years

function calculateLifetime () {
  setInterval(function () {
    init ()
    teste ()
  }, 1000)
}

function init () {
  now = new Date()
  dateOfBirth = new Date(document.getElementById('date-of-birth').value)
  diference = Math.abs(now.getTime() - dateOfBirth.getTime())
  seconds = Math.floor(diference / 1000)
  minutes = Math.floor(seconds / 60)
  hours = Math.floor(minutes / 60)
  days = Math.floor(hours / 24)
  weeks = Math.floor(days / 7)
  months = Math.floor(days / 30)
  years = Math.floor(days / 365)

  print()
}

function print () {
  var text = `Ou seja:\nEm segundos: ${seconds}\nEm minutos: ${minutes}\nEm horas: ${hours}\nEm dias: ${days}\nEm semanas: ${weeks}\nEm meses aprox.: ${months}\nEm anos aprox.: ${years} `
  document.getElementById('board').innerText = text
}

function teste () {
  console.log(seconds)  
}

function calc () {
  
}