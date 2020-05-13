function getDateOfBirth () {
  return new Date(document.getElementById('date-of-birth').value)
}

function getDateToday () {
  return new Date()
}

function getDiferenceDays (initialDate, finalDate) {
  return Math.abs(finalDate.getDate() - initialDate.getDate())
}

function getDiferenceMonths (initialDate, finalDate) {
  return Math.abs(finalDate.getMonth() - initialDate.getMonth() )
}

function getDiferenceYears (initialDate, finalDate) {
  return Math.abs(finalDate.getFullYear() - initialDate.getFullYear())
}

function getDiferenceDate (initialDate, finalDate) {
  let days = getDiferenceDays(initialDate, finalDate)
  let months = getDiferenceMonths(initialDate, finalDate)
  let years = getDiferenceYears(initialDate, finalDate)

  return { days, months, years}
}

function showDiferenceDate (date) {
  document.getElementById('board').innerText = `Dias de vida: ${date.days}\nMeses de vida: ${date.months}\nAnos de vida: ${date.years}`
}

function calculateLifetime () {
  var dateOfBirth = getDateOfBirth()
  
  var dateToday = getDateToday()
  console.log(dateOfBirth)
  var diferenceDate = getDiferenceDate(dateOfBirth, dateToday)
  showDiferenceDate(diferenceDate)
}