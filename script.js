let billInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numberDiv = document.getElementById('number')
let perPersonTotal = document.getElementById('perPersonTotal')

let number = Number(numberDiv.innerText)

function calculateBill() {
     const bill = Number(billInput.value)
     const tipPercent = Number(tipinput.value) / 100

     const tip = tipPercent * bill

     const total = tip + bill

     const perPersonTotal = total/ number

     perPersonTotalDiv.innerText = "$" + `${perPersonTotal.toFixed(2)}`
     
}