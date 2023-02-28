const validateForm=(form)=>{
    let error={
        username:'',
        password:''
    }
    const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const passwordRegex=/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/
    if(!emailRegex.test(form.username)){
        error.username='Ingrese un mail valido'
    }
    if(!passwordRegex.test(form.password)){
        error.password='Ingrese una contraseña valida'
    }
    return error
}

module.exports=validateForm