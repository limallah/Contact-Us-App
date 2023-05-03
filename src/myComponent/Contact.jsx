import "./style.css";
import { useFormik } from "formik"
import * as Yup from "yup"
import { nanoid } from "nanoid";
import axios, { } from 'axios';

export const Contact = (props) => {

    const stylediv = {color: "red", fontSize: "12px"};


    // const inputEvent = (e) => {
    //     // console.log(e.target.value);
    //     const name = e.target.name
    //     const value = e.target.value

    //     setData((preVal) => {

    //         return {
    //             ...preVal, [name]: value
    //         }
    //     })
    // } 

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert(`Your submission is succesufull`);

    //     props.submitForm(data);
    //     setData(INITIAL_STATE);
    // }

    
    const formik = useFormik({
        initialValues: {
          fullName: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        },
        
        validationSchema: Yup.object({
          fullName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            phone: Yup.number(),
            email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
            subject: Yup.string()
            .required('Required'),
            message: Yup.string()
            .required('Required'),
        }),

        onSubmit: values => {
            let userData={id: nanoid(5), ...values};
            axios.post('https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries', userData);
           formik.resetForm();
           alert(`Your submission is succesufull`);
           
        },
      });
    
    
    return (

        <>

            <div className='my-5'>
                <h1 className='text-center'>Contact US</h1>
            </div>

            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto check'>
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">Name</label>
                                <input 
                                type="name"  
                                required="true" 
                                className="form-control" 
                                id="fullName" 
                                placeholder="Enter your fullname" 
                                name='fullName' 
                                {...formik.getFieldProps('fullName')}
                                />
                                {formik.touched.fullName && formik.errors.fullName ? (
                                <div style = {stylediv}>{formik.errors.fullName}</div>
                                ) : null}
                            </div>
                            
                            <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">Phone</label>
                                <input 
                                type="phone" 
                                className="form-control" 
                                id="phone number" 
                                placeholder="Mobile" 
                                name='phone' 
                                {...formik.getFieldProps('phone')}
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                <div style = {stylediv}>{formik.errors.phone}</div>
                                ) : null}
                            </div>

                            <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">Email address</label>
                                <input 
                                type="email"
                                className="form-control" 
                                id="email" 
                                placeholder="name@example.com" 
                                name='email' 
                                {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                <div style = {stylediv}>{formik.errors.email}</div>
                            ) : null}
                            </div>
                            
                            <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">Subject</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="subject" 
                                placeholder="Subject title" 
                                name='subject' 
                                {...formik.getFieldProps('subject')}
                                />
                                {formik.touched.subject && formik.errors.subject ? (
                                <div style = {stylediv}>{formik.errors.subject}</div>
                            ) : null}
                            </div>
                        
                            <div className="mb-3">
                                <label to="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea 
                                className="form-control" 
                                id="message" 
                                rows="3" 
                                name='message' 
                                {...formik.getFieldProps('message')}>
                                </textarea>
                                {formik.touched.message && formik.errors.message ? (
                                <div style = {stylediv}>{formik.errors.message}</div>
                            ) : null}
                            </div>
                        
                            <div className="col-12">
                                <button 
                                className="btn btn-primary" 
                                type="submit">
                                Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
