import React from 'react';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import '../components/css/contact.css';


const initialValues = {
    Name: '',
    email: '',
    password: '',
    confirm_password: '',
    message: ''
}

const Contact = () => {

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



        return alert(`dear ${values.Name} your enquiry has been sent, you will be contacted soon !!!`);

    }


    return (
        <div>
            <h1 style={{ textAlign: "center" }}> Form </h1>

            <div>
                <div className='container'>
                    <div>
                        <div style={{ textAlign: 'center', fontWeight: 'bolder', color: 'grey' }}>fill up the form to contact us</div>
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

                            <div className='input-block'>
                                <label htmlFor='text' className='form-label'>Message</label>
                                <textarea name='message' value={values.message} onChange={handleChange} onBlur={handleBlur} rows='5' cols='30' id='text' placeholder='tell us about your query regarding your order or product ' className='form-control' ></textarea>
                                {errors.message && touched.message ? <p className='text-danger'>{errors.message}</p> : null}
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

export default Contact;




