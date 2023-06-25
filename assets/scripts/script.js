const cash = document.getElementById('cash')
const price = document.getElementById('price')
const oneHundred = document.getElementById('one-hundred')
const twenty = document.getElementById('twenty')
const ten = document.getElementById('ten')
const five = document.getElementById('five')
const one = document.getElementById('one')
const quarter = document.getElementById('quarter')
const dime = document.getElementById('dime')
const nickel = document.getElementById('nickel')
const penny = document.getElementById('penny')
const form = document.getElementById('cash-register')
const resetBtn = document.getElementById('reset-btn')

resetBtn.addEventListener('click', function () {
  reload()
})

function reload () {
  window.location.reload()
}

