
import * as Yup from 'yup';

export const contactSchemas = Yup.object({
    fname: Yup.string().min(2).max(26).required("Pls Enter Your First Name At Least 2 Characters"),
    lname: Yup.string().min(2).max(26).required("Pls Enter Your Last Name At Least 2 Characters"),
    email: Yup.string().email().required("Pls Enter Valid Email"),
    phnumber: Yup.number().min(1).required("Phone Number Must Be 10 Numbers"),
    massage: Yup.string().min(7).required("Pls Massage At Least 4 Characters")
})