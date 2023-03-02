import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import React from 'react'
import './contactUs.css'

export const ContactUs = () => {

    const refForm = useRef();

    const handleSubmit = (event) =>{
        const serviceID = 'service_l4xsdlj'
        const emailTemplate = 'template_q2jkrce'
        const APIKEY = 'f_WZieViT4aJpXA-Y'

        event.preventDefault();
        emailjs.sendForm(serviceID,emailTemplate,refForm.current,APIKEY)
        .then((result) =>{
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });


    }

    return (
        <form ref={refForm} action="" onSubmit={handleSubmit}>
            <div className='header-contact'>
                <h2>Contact Us</h2>
                <p>Please fill this form</p>
            </div>
            <hr />
            <fieldset className='field-name'>
                <label className='symbol-required name' name="name" htmlFor="">Name:</label>
                <input name='username' maxLength='50' type="text" placeholder='Miguel Angel Ibarra Ocampo' id='name' required />
            </fieldset>
            <fieldset className='field-email'>
                <label className='symbol-required' name="email" htmlFor="">Email:</label>
                <input maxLength='50' type="text" name='email' placeholder='ex: example@dom.com' id='email' required />
            </fieldset>
            <fieldset className='field-message'>
                <label className='symbol-required' htmlFor="">Message:</label>
                <textarea className='area-message' maxLength="500" placeholder='Left your message here!!' required name="message" id="" cols="30" rows="10"></textarea>
            </fieldset>
            <button className='btn-send'>Send</button>
        </form>
    )
}
