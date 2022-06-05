const canScreen = document.querySelector('.can__screen_out'),
      canBtn = Array.from(document.querySelectorAll('.can__btn,.can__btn1'));

canBtn.map((btn)=>{
    btn.addEventListener('click',function (e) {
        let answer = e.target.innerHTML
        Size()
        if (answer == 'AC')  clear()
        else if (answer == '+/-')  plusMinus()
        else if (answer == 'C') del()
        else if (answer == '=')  equal()
        else length(answer)
    })
})

function Size() {
    if (canScreen.innerHTML.length >= 12) canScreen.style.fontSize = '20px'
    else if (canScreen.innerHTML.length >= 9) canScreen.style.fontSize = '30px'
    else if (canScreen.innerHTML.length >= 4) canScreen.style.fontSize = '40px'
}

function del() {
    canScreen.innerHTML = canScreen.innerHTML.slice(0,-1)
}
function clear() {
    canScreen.innerHTML = ''
}
function plusMinus() {
    canScreen.innerHTML = parseFloat(canScreen.innerHTML) * -1
}
function equal() {
    canScreen.innerHTML = eval(canScreen.innerHTML)
    Size()
}
function length(answer) {
    canScreen.innerHTML.length >= 19 ? canScreen.innerHTML = canScreen.innerHTML : canScreen.innerHTML += answer
}