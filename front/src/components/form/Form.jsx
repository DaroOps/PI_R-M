import { useState, useEffect} from "react";
import validations from '../../functions/form/validation'

const Form = ({onLogin}) => {

  

    const [errors, setErrors] = useState({});

    const [userData, setUserData] = useState({

        email: '',
        password: ''

    });

    

    const handleChange = (event) => {
        

        //console.log(userData);
        //console.log(event.target.name);
      
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    }

    useEffect (()=>
    {
        setErrors(validations(userData));
     
    }, [userData])
    
    const onSubmit = (event) => {
        
        event.preventDefault();
        onLogin(userData);
        setUserData({
         email: userData.email,
         password: userData.password
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

            {errors.email !== '' && <p style={{ color: 'red' }}>{errors?.email}</p>}

            <label htmlFor="password">Password: </label>
            <input
                type="password"
                name="password"
                value={userData.password}

                onChange={handleChange}
            />

            {errors.password !== '' &&<p style={{ color: 'red' }}>{errors?.password}</p>}

            <button
                type="onsumbit"
                disabled={errors?.email || errors?.password}>
                Sumbit
            </button>

        </form>
    );

}

export default Form;