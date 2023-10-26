const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const mail = document.getElementById("mail")
const form = document.getElementById ("form")
const parrafo = document.getElementById ("warnings")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <3){
        warnings +=`El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length <4){
        warnings +=`El apellido no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(mail.value)){
        warnings +=`El E-mail no es valido <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"

    }
})

