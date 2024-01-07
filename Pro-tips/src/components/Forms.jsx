import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [formErr, setFormErr] = useState({});
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
    });

    const handleInputChange = e => {
        let { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        let errors = validate(formData);
        setFormErr(errors);
    
        let errKeyArr = Object.keys(errors);
    
        if (errKeyArr.length === 0) {
            setFormSubmit(true);
            toast.success("Form Submitted");
        } else {
            Object.values(errors).forEach((errorMsg) => {
                toast.error(errorMsg);
            });
            setFormSubmit(false);
        }
        console.log(formData);
    };

    const validate = (data) => {
        let error = {};

        if (data.firstName.trim() === "") {
            error.firstName = "Please enter your First Name";
        }

        if (data.lastName.trim() === "") {
            error.lastName = "Please enter your Last Name";
        }

        if (data.email.trim() === "") {
            error.email = "Please enter your Email";
        }

        if (data.phone.trim() === "") {
            error.phone = "Please enter your Mobile Number";
        } else if (data.phone.trim().length !== 10) {
            error.phone = "Please enter a valid 10-digit Mobile Number";
        }
        return error;
    };

    return (
        <div className='form-container'>
            <ToastContainer /> 
            <fieldset>
                <legend>Fill This Form</legend>
                <form onSubmit={formSubmitHandler}>
                    {formSubmit && (
                        <div className='success'>
                            <p>Registration Successful</p>
                        </div>
                    )}
                    <label> First Name :</label>
                    <input type="text" name='firstName'onChange={handleInputChange}/>
                    {formErr.firstName && <p className='err'>{formErr.firstName}</p>}

                    <label> Last Name :</label>
                    <input type="text" name='lastName' onChange={handleInputChange}/>
                    {formErr.lastName && <p className='err'>{formErr.lastName}</p>}

                    <label> Email :</label>
                    <input type="email" name='email' onChange={handleInputChange}/>
                    {formErr.email && <p className='err'>{formErr.email}</p>}

                    <label> Mobile Number :</label>
                    <input type="number" name='phone' onChange={handleInputChange}/>
                    {formErr.phone && <p className='err'>{formErr.phone}</p>}

                    <input type="submit" value={"Register"} />
                </form>
            </fieldset>
        </div>
    )
};

export default Forms