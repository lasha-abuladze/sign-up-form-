`use strict`;


const input = Array.from(document.getElementsByClassName(`inp`));
const submit = document.querySelector(`.submit`);

const errorSms = Array.from(document.getElementsByClassName(`error-sms`));
const errorSvg = Array.from(document.getElementsByClassName(`error-svg`));





submit.addEventListener(`click`, function(e) {

    e.preventDefault();
  
    input.forEach((element, index) => {

        if(element.value === ``) {
            console.log(`heloo ${index}`)
            errorSms[index].classList.add(`visible`)
            errorSvg[index].classList.add(`visible`)            

        } else {

            if(input[2].value.includes(`@`) && input[2].value.includes(`.`)) {
                errorSms[2].classList.remove(`visible`)
                errorSvg[2].classList.remove(`visible`)
            } else {
                errorSms[2].classList.add(`visible`)
                errorSvg[2].classList.add(`visible`)            
            }

            errorSms[index].classList.remove(`visible`)
            errorSvg[index].classList.remove(`visible`)
        }
    })

    // input.forEach((element,index) => {
    //     if(element[2].value.includes(`@`)) {
    //         console.log(`this is mail`)
    //     } else {
    //         console.log(`it isn't mail`)
    //     }
    // })


})





