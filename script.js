function calculateLifetime () {
  const now = new Date()
  const dateOfBirth = new Date(document.getElementById('date-of-birth').value)
  const diference = Math.abs(now.getTime() - dateOfBirth.getTime())
  const days = Math.ceil(diference / (1000 * 60 * 60 *24))

  document.getElementById('board').innerText = `Ou seja:\nEm dias: ${days}\nEm meses aprox.: ${Math.floor(days/30)}\nEm anos aprox.: ${Math.floor(days/(30*12))} `
  console.log(days%(30*12))
  console.log((days%(30*12))%30);
  
}