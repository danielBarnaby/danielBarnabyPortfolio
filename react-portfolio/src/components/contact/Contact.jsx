import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa'
import { BiRightArrowAlt } from 'react-icons/bi'
import axios from 'axios'
// import { newUserData } from '../../actions/index'

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Variables to store the form input values.
    let nameInputValue = document.getElementById('contactNameInput').value;
    let emailInputValue = document.getElementById('contactEmailInput').value;
    let messageInputValue = document.getElementById('contactMessageInput').value;
    
    let firstInitial = nameInputValue.slice(0,1).toUpperCase()
    let restOfName = nameInputValue.slice(1,nameInputValue.length)
    let capitalName = firstInitial.concat(restOfName)

    // create an obj to match DB user schema
    const newUserDataObj = {
      name: nameInputValue,
      email: emailInputValue,
      message: messageInputValue
  }

    emailjs.sendForm('service_2dpfs6y', 'template_qxqygaf', form.current, '1I0KFzDjHY-1wB5Ou')
    // .then((result) => {
    //   console.log(result.text);
    // }, (error) => {
    //   console.log(error.text);
    // })

// ----- BACKEND COMMUNICATION ------>
    // create a path to the server routes
    let signUpUrl = `http://localhost:5000/user/userMessage`

    // **** post the newUser data to the server
    axios.post(signUpUrl, {newUser:newUserDataObj})
        .then(response => {

            console.log('signUpRESPONSE.data...', response.data)
            console.log('signUpRESPONSE.data.data...', response.data.data)
            if (response.data.response) {
                
                const userObj = {
                    id: response.data.id,
                    userName: capitalName,
                    email: emailInputValue,
                    message: []
                }; //END "newId" object to dispatch to redux store.
                
                // pass user data to parent ('App') state
                    // props.loginAppState(userObj);
                
                console.log('userObj4State',userObj);
                // console.log(newUserDataObj);

                // // Dispatch the matched user input exercise data to redux state.
                //     dispatch(newUserData(userObj));
                //     dispatch(login());
                //     history.push(`/${response.data.id}/welcome`)
            } // end 'if' statement.
            // else if (!response.data.response){
            //   console.log('User exists!!!!', response.data.response)
              // searchError.innerHTML = `<h2 id="userNotFoundTxt">**User name already exists!!**<br /> Please modify your user name.</h2>`
              // searchError.classList.remove('hidden')
              // setTimeout(() => {
              //   document.getElementById('contactNameInput').value='';
              //   document.getElementById('contactEmailInput').value='';
              //   searchError.classList.add('hidden');
              // }, 2000);
            //   return;
            // }
        }) // end 'then' function.
        .catch(err => console.log(err)); // end 'axios' call.

    e.target.reset()
  };

  return (
    <section id='contactSection'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>barnaby.daniel08@gmail.com</h5>
              <a href="mailto:barnaby.daniel08@gmail.com" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <FaFacebookMessenger className='contact__option-icon' />
              <h4>Messanger</h4>
              <h5>**MessUserName**</h5>
              <a href="https://m.me/meUserInNameQueryString" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <FaWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>**Phone#Here**</h5>
              <a href="https://api.whatsapp.com/send?phone={**Insert#hereWithoutBrackets}" target='_blank'>Send a message</a>
            </article>
          </div>
          {/* === END OF CONTACT OPTIONS === */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' id='contactNameInput' placeholder='Your Full Name' required />
            <input type="email" name='email' id='contactEmailInput' placeholder='Your Email' required />
            <textarea name="message" rows="7" id='contactMessageInput' placeholder='Your Message' required></textarea>
            <button type='submit' className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <a href="#" className='scroll__up'>Top of Page<BiRightArrowAlt /></a>
    </section>
  )
}

