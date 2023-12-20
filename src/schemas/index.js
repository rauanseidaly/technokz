import * as Yup from 'yup'

export const signUpSchema = Yup.object({

    Name: Yup.string().min(5).max(20).required('your name is required'),

    email: Yup.string().email().required('your email is required'),

    password: Yup.string().min(6).required('your password is required'),

    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'password must match').required(),

    message: Yup.string().required('your query is required')

}) 