import { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_klw5tdz',
            'template_neyo0ts',
            form.current,
            '15X4dJOwty6rmDxc1')
            .then((result) => {
                console.log(result);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <form className="text-textColor">
                <div>
                    <label className="label font-semibold">Name:-</label>
                    <input type="text" name="name" required
                        placeholder='your name'
                        className="input bg-white input-bordered border rounded-full border-primaryColor focus:border-secondaryColor h-14 w-full"
                    />
                </div>
                <div>
                    <label className="label font-semibold">Email:-</label>
                    <input type="email" name="email" required
                        placeholder='your email'
                        className="input bg-white input-bordered border rounded-full border-primaryColor focus:border-secondaryColor h-14 w-full"
                    />
                    <div className='lg:col-span-2'>
                        <label className="label font-semibold">Message:-</label>
                        <textarea name="message" required
                            placeholder='your message here'
                            className="textarea bg-white textarea-bordered textarea-sm rounded-full border-primaryColor focus:border-secondaryColor h-22 p-4 w-full border" />
                        <br />
                    </div>
                </div>
                <input type="submit" value="Send"
                    className=' bg-white shadow-md border rounded-md mt-3 primaryBtn'
                />
            </form>
        </div>
    );
};

export default ContactForm;