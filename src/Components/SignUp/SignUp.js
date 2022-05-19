import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './SignUp.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../../firebase.init'

const SignUp = () => {
    const [name , setName] = useState({value: '' , error:''})
    const [email , setEmail] = useState({value:'' , error:''})
    const [password  , setPassword] = useState({value:'' ,error:''})
    const [error , setError] = useState('')

    const handleName = event => {
        const nameInput = event.target.value
        if(nameInput === ''){
          setName({value:'' , error:'Please enter name'})
        }
        else{
          setName({value:nameInput , error:''})
        }
        
      }


    const handleEmail = event => {
        const emailField = event.target.value
        if(/\S+@\S+\.\S+/.test(emailField)){
          setEmail({value:emailField , error:''})
        }
        else{
           setEmail({value:'' , error:'Please Provide a valid Email'})
        }
        
      }

      const handlePassword = event => {
        const password = event.target.value
        if(password.length < 6){
          setPassword({value:'' , error:'password must be six character'})
        }
        else if (!/(?=.*[A-Z])/.test(password)){
          setPassword({value:'', error:'Password must be one capital latter'})
        }
        else{
          setPassword({value:password , error:''})
        }
       
      }

    const handleSignUp  = event => {
        event.preventDefault()
       
        if(name.value === ''){
            setName({value:'' , error:'Name is required'})
          }
          if(email.value === ''){
            setEmail({value:'' , error:'Email is required'})
          }
          if(password.value === ''){
            setPassword({value:'',error:'Password is required'})
          }
       
          if(name.value && email.value && password.value){
            createUserWithEmailAndPassword(auth, email.value, password.value)
            .then( data => {
                // const user = data.user
                // console.log(user)
              toast.success('User successfully sign up')
            })
            .catch(error => {
              setError(error)
            });
         }

    }
    return (
        <div className='form'>
            <h3>Please SignUp</h3>
             <form onSubmit={handleSignUp}>
                <label htmlFor="name" className='label'>Name</label> <br />
                <input type="text" placeholder='Enter your name' 
                onBlur={handleName}
                className='input-field'/> <br />
                {
                name.error && <p className='error'>{name.error}</p>
                }

                <label htmlFor="email"  className='label'>Email</label> <br />
                <input type="email" placeholder='Enter your email' 
                onBlur={handleEmail}
                className='input-field'/><br />
                {
                    email.error && <p className='error'>{email.error}</p>
                }

                <label htmlFor="name"  className='label'>Password</label> <br />
                <input type="password" placeholder='Enter your password' 
                onBlur={handlePassword}
                className='input-field'/><br />
                {
                    password.error && <p className='error'>{password.error}</p>
                }

                {
                    error?.message && <p className='error'>{error.message}</p>
                  }
                <input type="submit" value="SignUP"  className='signup-btn'/>
            </form>
        </div>
    );
};

export default SignUp;