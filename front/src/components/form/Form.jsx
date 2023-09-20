import { useState, useEffect} from "react";
import {emailValidation, passwordValidation} from '../../functions/form/validation'

const Form = ({onLogin}) => {

  

    const [errors, setErrors] = useState({});

    const [userData, setUserData] = useState({

        email: '',
        password: ''

    });

    

    const handleChange = (event) => {
        

        console.log(userData);
        console.log(event.target.name);

        if(event.target.name === "email")
        {
            console.log("email Event "+userData?.email)
            setErrors(emailValidation(userData?.email));
            console.log("email error "+errors?.emailerr);
        }
        else if(event.target.name === "password")
        {
            console.log("password Event "+userData?.password)

            setErrors(passwordValidation(userData?.password))

            console.log("pass error "+errors?.passerr);
        }
      
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    }

    const onSubmit = (event) => {
        
        event.preventDefault();
        onLogin(userData);
        setUserData({
            email:'',
            password: ''
        })
    }

    return (

        <form onSubmit={onSubmit} className="form">
            <label htmlFor="email">E-mail: </label>
            <input
                type="email"
                name="email"
                value={userData.email}

                onChange={handleChange}
                
            />

            <p style={{ color: 'red' }}>{errors?.emailerr}</p>

            <label htmlFor="password">Password: </label>
            <input
                type="password"
                name="password"
                value={userData.password}

                onChange={handleChange}
            />

            <p style={{ color: 'red' }}>{errors?.passerr}</p>

            <button
                type="onsumbit"
                disabled={errors?.emailerr || errors?.passerr}>
                Sumbit
            </button>

        </form>
    );

}

export default Form;