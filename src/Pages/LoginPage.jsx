import React from 'react';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import '../components/css/contact.css';


const initialValues = {
    Name: '',
    email: '',
    password: '',
    confirm_password: '',
}

const LoginPage = () => {

    const formik = useFormik({

        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            display();
            action.resetForm();
        }
    });

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset } = formik;


    const display = () => {



        return alert(`dear ${values.Name} Your account has been registered`);

    }


    return (
        <div>
            <h1 style={{ textAlign: "center" }}> Login</h1>

            <div>
                <div className='container'>
                    <div>
                        <div style={{ textAlign: 'center', fontWeight: 'bolder', color: 'grey' }}>Login In</div>
                    </div>
                    <div>
                        <div style={{ textAlign: 'center', fontWeight: 'bolder', color: 'grey' }}>Don't have account? Just Register</div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='input-block'>
                                <label htmlFor='name' className='form-label'>Name</label>
                                <input type='name' name='Name' value={values.Name} onChange={handleChange} onBlur={handleBlur} id='name' placeholder='your full name' className='form-control' />
                                {errors.Name && touched.Name ? <p className='text-danger'>{errors.Name}</p> : null}
                            </div>

                            <div className='input-block'>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <input type='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} id='email' placeholder='your email id' className='form-control' />
                                {errors.email && touched.email ? <p className='text-danger'>{errors.email}</p> : null}
                            </div>

                            <div className='input-block'>
                                <label htmlFor='password' className='form-label'>Password</label>
                                <input type='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} id='password' placeholder='your password' className='form-control' />
                                {errors.password && touched.password ? <p className='text-danger'>{errors.password}</p> : null}
                            </div>

                            <div className='input-block'>
                                <label htmlFor='confirm_password' className='form-label'>Confirm Password</label>
                                <input type='password' name='confirm_password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} id='confirm_password' placeholder='confirm your password' className='form-control' />
                                {errors.confirm_password && touched.confirm_password ? <p className='text-danger'>{errors.confirm_password}</p> : null}
                            </div>

                            <div className='d-flex'>
                                <button type='reset' onClick={handleReset} className='btn btn-secondary align-self-start mx-auto' > Reset </button>
                                <button type='submit' className='btn btn-primary align-self-end mx-auto' > Submit </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default LoginPage;

