let billInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numberDiv = document.getElementById('number')
let perPersonTotalDiv = document.getElementById('perPersonTotal')

let number = Number(numberDiv.innerText)

function calculateBill() {
     const bill = Number(billInput.value)
     const tipPercent = Number(tipInput.value) / 100

     const tip = tipPercent * bill

     const total = tip + bill

     const perPersonTotal = total/number

     perPersonTotalDiv.innerText = "$" + `${perPersonTotal.toFixed(2)}`
}

function increasePeople() {
     number++
     numberDiv.innerText = number

     calculateBill()
}

function decreasePeople() {
     if(number <= 1) {
          return
     }
     number--
     numberDiv.innerText = number

     calculateBill()
}