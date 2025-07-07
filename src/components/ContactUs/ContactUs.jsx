import React from 'react'
import './ContactUs.css'
import Swal from 'sweetalert2'

function ContactUs() {
   //----------------------
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6d9c0c6d-8d41-4ed2-9b4d-584cb97e8b8a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfuly!",
        icon: "success"
      });
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }

  };
  //----------------------
    return (
        <section className="justify-content-center align-content-center d-flex my-3">
            <form onSubmit={onSubmit} className='w-100'>
                <div className="input-box my-4">
                    <label>Full Name</label>
                    <input type="text" className="field my-2" placeholder='Enter your name' name='name' required />
                </div>
                <div className="input-box my-4">
                    <label>Email Address</label>
                    <input type="email" className="field my-2" placeholder='Enter your email' name='email' required />
                </div>
                <div className="input-box my-4">
                    <label>Your Message</label>
                    <textarea  className="field mess my-2" placeholder='Enter your message' name='message'  required></textarea>
                </div>
                <button type="submit" className="my-4">Send Message</button>
            </form>
        </section>
    )
}


export default ContactUs