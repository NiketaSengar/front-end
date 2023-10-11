let rightArrow = document.getElementById('rightscroll')
let couponsimg = document.getElementsByClassName('couponsimg')[0]
let leftArrow = document.getElementById('leftscroll')

rightArrow.addEventListener('click',()=>{
    couponsimg.scrollLeft+=300
})

leftArrow.addEventListener('click',()=>{
    couponsimg.scrollLeft-=300
})


let clickMe=document.getElementById('clickMe')
clickMe.addEventListener('click',callbtn)
function callbtn() {
    userconfirmation = confirm('CheesyBuns wants to access your location')
    if (userconfirmation == True) {
        return True
    }
    else {
        return false
    }
}