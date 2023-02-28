import React, { useEffect, useState } from 'react'
import styles from './SignIn.module.css'
import validateForm from './validation'

function SingIn({userVerification}) {
    const [form, setForm] = useState({
        username:'',
        password:''
    })
    const [formError, setFormError] = useState({
        username:'Ingrese un mail valido',
        password:'Ingrese una contraseña valida'
    })
    const changeHandler=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    useEffect(() => {
        setFormError(validateForm(form))
    }, [form])
    
    const submitHandler=(e)=>{
        e.preventDefault()
    }

  return (
    <div className={styles.page}>
        <form className={styles.form} onSubmit={submitHandler}>
            <h2>Login</h2>
            <div>
                <label>Username</label>
                <input type='text' 
                    value={form.username} 
                    placeholder='Ingrese su usuario' 
                    onChange={changeHandler}
                    name='username'
                ></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' 
                    value={form.password} 
                    placeholder='Ingrese su contraseña' 
                    onChange={changeHandler}
                    name='password'
                ></input>
            </div>
            <button 
                type='submit'
                onClick={()=>{
                    userVerification(form)
                }} 
                disabled={!(formError.password===''&&formError.username==='')}
            >Submit</button>
        </form>
    </div>
    
  )
}

export default SingIn