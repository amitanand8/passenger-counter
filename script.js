// initialise count to 0
// listen for clicks on increment button
// increment count variable when button is clicked
// change count-el in html to reflect new count

let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    console.log(countStr)

    document.getElementById("save-el").innerText += countStr

    count = 0
    countEl.innerText = count
}