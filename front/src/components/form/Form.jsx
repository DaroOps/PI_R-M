import { useState, useEffect } from "react";
import validations from '../../functions/form/validation'
import logo from '../../assets/rickmortylogo.png';

import './Form.modules.css';

const Form = ({ onLogin }) => {

    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
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
            <img className="background" src="https://hdwallpaperim.com/wp-content/uploads/2017/08/22/271164-Rick_and_Morty-space.jpg" />

            <div className="logo-container">
                <img className="logo-image" src={logo} alt="Rick&Morty" />
            </div>


            <div className="login-background">
                <div className="dot" />
                <div className="login-card">
                    <label htmlFor="email">E-mail: </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={userData.email}

                        onChange={handleChange}
                    />
                    {errors.email !== '' && <p style={{ color: 'red' }}>{errors?.email}</p>}

                    <label htmlFor="password">Password: </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={userData.password}

                        onChange={handleChange}
                    />

                    {errors.password !== '' && <p style={{ color: 'red' }}>{errors?.password}</p>}

                    <button
                        type="Sumbit"
                        disabled={errors?.email || errors?.password}>
                        Log In
                    </button>
                </div>
            </div>

        </form>


    );

}

export default Form;