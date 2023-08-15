function clock(){
let h=document.getElementsByClassName('hrhand')[0]
let m=document.getElementsByClassName('minhand')[0]
let s=document.getElementsByClassName('sechand')[0]

let date=new Date()

let hour=date.getHours()
console.log(hour)
let min=date.getMinutes()
let sec=date.getSeconds()

h.style.transform=`rotate(${30*hour+min/2}deg)`
m.style.transform=`rotate(${6*min}deg)`
s.style.transform=`rotate(${6*sec}deg)`
let sound=new Audio('194347999-clock-wall-tick-tock-analog-01.m4a')
sound.play()
}

setInterval(clock,1000)