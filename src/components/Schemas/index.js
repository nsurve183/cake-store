
import * as Yup from 'yup';


// for contact us
export const contactSchemas = Yup.object({
    fname: Yup.string().min(2).max(26).required("Pls Enter Your First Name At Least 2 Characters"),
    lname: Yup.string().min(2).max(26).required("Pls Enter Your Last Name At Least 2 Characters"),
    email: Yup.string().email().required("Pls Enter Valid Email"),
    phnumber: Yup.number().min(1).required("Phone Number Must Be 10 Numbers"),
    massage: Yup.string().min(7).required("Pls Massage At Least 4 Characters")
})


// for user sign up 
export const signupSchema = Yup.object({
    name: Yup.string().min(3).max(26).required("Pls Enter Your Name At Least 3 Characters"),
    username: Yup.string().min(4).max(10).required("Pls Enter Your Username At Least min 4 Characters"),
    email: Yup.string().email().required("Pls Enter Valid Email"),
    password: Yup.string().min(6).max(10).required("Password should be min 6 character")
})


export const userViewSchema = Yup.object({
    name: Yup.string().min(2).max(30).required("Pls Enter Your Name At Least 3 Characters"),
    description: Yup.string().min(7).max(30).required("Pls Enter Your Name At Least 3 Characters"),
})