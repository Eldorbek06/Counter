let counterNum = 0
document.querySelector('.rnd').onclick = () => {
    counterNum = Math.round(Math.random() * 100)
    document.querySelector('.number').innerHTML = counterNum
}
document.querySelector('.reset').onclick = () => {
    counterNum = 0
    document.querySelector('.number').innerHTML = counterNum
}
document.querySelector('.up').onclick = () => {
    counterNum++
    document.querySelector('.number').innerHTML = counterNum
}
document.querySelector('.down').onclick = () => {
    counterNum--
    document.querySelector('.number').innerHTML = counterNum
}