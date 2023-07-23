let buttons = document.querySelectorAll('button')
let input = document.getElementById('inputbox')
let string = ""



Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string)
            input.value = string
        }
        else if (e.target.innerHTML == 'AC') {
            string = ''
            input.value = string
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1)
            input.value = string
        }
        else if (e.target.innerHTML == 'cos') {
            input.value=Math.cos(input.value)
        }
        else if (e.target.innerHTML == 'tan') {
            input.value=Math.tan(input.value)
        }
        else if (e.target.innerHTML == 'sin') {
            input.value=Math.sin(input.value)
        }

        else if(e.target.innerHTML=='log'){
            input.value=Math.log(input.value)
        }

        else if(e.target.innerHTML=='pow'){
            input.value=Math.pow(input.value,2)
        }
        else if(e.target.innerHTML=='e'){
            input.value=Math.E
        }
        else {
            string=string+e.target.innerHTML
            input.value = string
        }
    })
})

