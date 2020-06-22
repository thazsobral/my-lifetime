function orchestrator () {
  setInterval(function () {
    init ()
  }, 1000)
}

function init () {
  var now
  var dateOfBirth
  var diference

  now = new Date()
  dateOfBirth = new Date(document.getElementById('date-of-birth').value)
  diference = now.getTime() - dateOfBirth.getTime()
  
  var timesArounded = calculeAllTimesArounded(diference)
  printTimesArounded(timesArounded)

  var allIimes = calculeAllTimes(diference)
  var runningTime = calculeRunningTime(allIimes)
  printTotalTime(runningTime)
  
}

function calculeAllTimesArounded (millisecondes) {
  const timesArounded = new Object
  
  timesArounded.seconds = aroundFloorTime(millisecondes / 1000)
  timesArounded.minutes = aroundFloorTime(timesArounded.seconds / 60)
  timesArounded.hours = aroundFloorTime(timesArounded.minutes / 60)
  timesArounded.days = aroundFloorTime(timesArounded.hours / 24)
  timesArounded.weeks = aroundFloorTime(timesArounded.days / 7)
  timesArounded.months = aroundFloorTime(timesArounded.days / 30)
  timesArounded.years = aroundFloorTime(timesArounded.days / 365)
  
  return timesArounded
}

function calculeAllTimes (millisecondes) {
  const allIimes = new Object
  
  allIimes.seconds = millisecondes / 1000
  allIimes.minutes = allIimes.seconds / 60
  allIimes.hours = allIimes.minutes / 60
  allIimes.days = allIimes.hours / 24
  allIimes.weeks = allIimes.days / 7
  allIimes.months = allIimes.days / 30
  allIimes.years = allIimes.days / 365
  
  return allIimes
}

function calculeRunningTime (times) {
  const runningTime = new Object
  let timeLeft = times.seconds

  runningTime.years = aroundFloorTime(timeLeft / (60 * 60 * 24 * 365))
  timeLeft -= runningTime.years * (60 * 60 * 24 * 365)
  runningTime.months = aroundFloorTime(timeLeft / (60 * 60 * 24 * 30))
  timeLeft -= runningTime.months * (60 * 60 * 24 * 30)
  runningTime.weeks = aroundFloorTime(timeLeft / (60 * 60 * 24 * 7))
  timeLeft -= runningTime.weeks * (60 * 60 * 24 * 7)
  runningTime.days = aroundFloorTime(timeLeft / (60 * 60 * 24))
  timeLeft -= runningTime.days * (60 * 60 * 24)
  runningTime.hours = aroundFloorTime(timeLeft / (60 * 60))
  timeLeft -= runningTime.hours * (60 * 60)
  runningTime.minutes = aroundFloorTime(timeLeft / 60)
  timeLeft -= runningTime.minutes * 60
  runningTime.seconds = aroundFloorTime(timeLeft)

  return runningTime
}

function aroundFloorTime (value) {
  return Math.floor(value)
}

function calculeDiference (startTime, endTime) {
  return Math.abs(endTime - startTime)
}

function printTimesArounded (times) {
  var text = `Ou seja:\nEm segundos: ${times.seconds}\nEm minutos: ${times.minutes}\nEm horas: ${times.hours}\nEm dias: ${times.days}\nEm semanas: ${times.weeks}\nEm meses aprox.: ${times.months}\nEm anos aprox.: ${times.years}`
  
  document.getElementById('board').innerText = text
}

function printTotalTime (times) {
  var text = `Você têm ${times.years} anos ${times.months} meses ${times.weeks} semanas ${times.days} dias ${times.hours} horas ${times.minutes} minutos e ${times.seconds} segundos de vidas.`
  
  document.getElementById('time-life-board').innerText = text
}
