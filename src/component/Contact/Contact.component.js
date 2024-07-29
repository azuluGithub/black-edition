import { useRef } from 'react';
import emailjs from 'emailjs-com';
// import { useParams } from 'react-router-dom';

import { 
  NOTIFICATION_FAILURE_TYPE,  
  NOTIFICATION_SUCCESS_TYPE,
} from '../Notification/Notification.config';
// import { ourServicesList } from "../../util/Services";

import './Contact.style.scss';

const ContactComponent = ({ showNotification }) => {
  const formRef = useRef();
  // const { id } = useParams();

  // const filterServices = () => {
  //   return ourServicesList.filter((service) => service.id === id);
  // }

  const renderTitle = () => {
    return (
      <p className='Contact-Title'>
        {'Contact Us'}
      </p>
    );
  }

  const renderAddress = () => {
    return (
      <div className='Contact-Address'>
        <div className='Contact-AddressItem'>
          <p className='Contact-AddressItemTitle'>{'Address'}</p>
          <p className='Contact-AddressItemText'>{'Johannesburg, Gauteng, ZA'}</p>
        </div>
        <div className='Contact-AddressItem'>
          <p className='Contact-AddressItemTitle'>{'Phone'}</p>
          <p className='Contact-AddressItemText Contact-AddressItemText_Active'>{'(011) 300 1111 | (023) 444 0369'}</p>
        </div>
        <div className='Contact-AddressItem'>
          <p className='Contact-AddressItemTitle'>{'Email Address'}</p>
          <p className='Contact-AddressItemText Contact-AddressItemText_Active'>{'we4u@logistix.co.za'}</p>
        </div>
      </div>
    );
  }

  const renderMoreInfo = () => {
    return (
      <div className='Contact-MoreInfo'>
          <p className='Contact-MoreInfoItemTitle'>{'More Info'}</p>
          <p className='Contact-MoreInfoItemText'>{'Our operating hours are every weekday from 7:30am - 6:00pm, and every weekend and holidays from 8:00am-3:00pm.'}</p>
          <p className='Contact-MoreInfoItemText'>{'Should your items be on the move with us, you have 24/7 support for your peace of mind. We pride ourselves with our remarkable turn around time on both queries and requests, with us you wont wait long. Anytime you need us, we will always be there.'}</p>
      </div>
    )
  }

  const renderInfo = () => {
    return (
      <div className='Contact-Info'>
        { renderAddress() }
        { renderMoreInfo() }
      </div>
    );
    }

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
      const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
      const USER_ID = process.env.REACT_APP_USER_ID;
  
      if(!navigator.onLine) {
        const notification = {
          notificationsId: `${Date.now()}${Math.floor(Math.random(234, 56754))}`,
          type: NOTIFICATION_FAILURE_TYPE,
          message: 'Please check your network then try again.',
        };
        
        showNotification(notification);
        return;
      }
  
      emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        USER_ID
      ).then(
        result => {
          const notification = {
            notificationsId: `${Date.now()}${Math.floor(Math.random(123, 45678))}`,
            type: NOTIFICATION_SUCCESS_TYPE,
            message: result.text,
          } 
          showNotification(notification);
        },
        error => {
          const notification = {
            notificationsId: `${Date.now()}${Math.floor(Math.random(234, 56754))}`,
            type: NOTIFICATION_FAILURE_TYPE,
            message: error.text,
          };
  
          showNotification(notification);
        }
      )
    }


  const renderContactForm = () => {
    // const message = filterServices()[0] ? filterServices()[0].title : '';
    
    return (
      <div className='Contact-ContactForm'>
        { renderTitle() }
        <div className='Contact-Divider'></div>
        <form ref={formRef} className='Contact-Form' onSubmit={handleSubmit}>
          <div className='FormInputContainer'>
            <input 
              type='text' 
              className='FormInput' 
              name='firstname'
              placeholder='Enter Your First Name'
              required
            />
          </div>
          <div className='FormInputContainer'>
            <input 
              type='text' 
              className='FormInput' 
              name='lastname'
              placeholder='Enter Your Last Name'
              required
            />
          </div>
          <div className='FormInputContainer'>
            <input 
              type='email' 
              className='FormInput' 
              name='userEmail'
              placeholder='Enter Your Email'
              required
            />
          </div>
          <div className='FormInputContainer'>
            <input 
              type='text' 
              className='FormInput' 
              name='contactNumber'
              placeholder='Enter Your Contact Number'
              required
            />
          </div>
          <div className='FormInputContainer'>
            <input 
              type='text' 
              className='FormInput' 
              name='subject'
              placeholder='Enter Subject'
              required
            />
          </div>
          <div className='FormInputContainer'>
            <textarea 
              className='Contact-TextArea FormTextArea'
              name='message'
              placeholder='Write your notes or question here...'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='Contact-Button Button'
          >{"Send Message"}</button>
        </form>
      </div>
    );
  }

  const renderComponents = () => {
    return (
      <div className='Contact-Split'>
        { renderInfo() }
        { renderContactForm() }
      </div>
    );
  }

  const renderContact = () => {
    return (
      <section className='Contact PaddedContainer'>
        <div className='ContainerWrapper'>
          { renderComponents() }
        </div>
      </section>
    );
  }

  return renderContact();
}

export default ContactComponent;