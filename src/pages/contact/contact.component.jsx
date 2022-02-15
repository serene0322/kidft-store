import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';

import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

import './contact.styles.scss';

const ContactPage = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_plbsxru',
            'template_z26lqjw', 
            e.target, 
            'user_GVgJi3WJ8IAImRhrxeLIw'
        )
        .then((result) => {
            console.log(result.text);
            toast.success('Your feedback has successfully sent.');
        }, (error) => {
            console.log(error.text);
            toast.error('Something error. Please contact admin for help.');
        });
        e.target.reset();
    };

    return (
        <div className='contact-page'>
            <h2>Any Feedback To Us ?</h2>
            <span>Please fill up the details below to contact us.</span>

            <form className='row' onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" className='form-control' />

                <label>Email</label>
                <input type="email" name="email" className='form-control' />

                <label>Message</label>
                <textarea name="message" rows='5' className='form-control' />

                <CustomButton type='submit'>Send</CustomButton>
            </form>

        </div>
    )
};

export default ContactPage;