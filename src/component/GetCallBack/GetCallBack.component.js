import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaMoneyBill,FaPhoneAlt } from 'react-icons/fa';

import { 
  NOTIFICATION_FAILURE_TYPE,
  NOTIFICATION_SUCCESS_TYPE,
} from '../Notification/Notification.config';

import './GetCallBack.style.scss';

const GetCallBackComponent = ({ showNotification }) => {
  const formRef = useRef();

  const whyUsList = [
    {
      id: 'BEST PRICES',
      url: <FaMoneyBill color='white' fontSize={'30px'} />,
      title: 'BEST PRICES',
      content: 'We will beat any quotation, hands down! We give the best value for money in the industry and our prices are very competitive.'
    },
    {
      id: 'EXTENSIVE SUPPORT',
      url: <FaPhoneAlt color='white' fontSize={'30px'} />,
      title: 'EXTENSIVE SUPPORT',
      content: 'We have long operating hours and even longer support hours. Your calls are guaranteed to be answered after hours when your order is in transit.'
    }
  ];

  const renderTitle = () => {
    return (
      <h2 className='GetCallBack-Title'>
        {'Get A Call Back'}
      </h2>
    );
  }

  const renderWhyUsItem = ({ id, url, title, content }) => {
    return (
      <div 
        className='GetCallBack-WhyUsItem'
        key={id}
      >
        <div className='GetCallBack-WhyUsItemImage'>
          { url }
        </div>
        <div className='GetCallBack-WhyUsItemContentContainer'>
          <span className='GetCallBack-WhyUsItemTitle'>{title}</span>
          <div className='GetCallBack-Divider'></div>
          <p className='GetCallBack-WhyUsItemContent'>{content}</p>
        </div>
      </div>
    );
  }

  const renderWhyUs = () => {
    return (
      <div className='GetCallBack-WhyUs'>
        { whyUsList.map(renderWhyUsItem) }
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

  const renderGetCallBackForm = () => {
    return (
      <div className='GetCallBack-GetCallBackForm'>
        { renderTitle() }
        <div className='GetCallBack-Divider GetCallBack-Spaced'></div>
        <form ref={formRef} className='GetCallBack-Form' onSubmit={handleSubmit}>
          <div className='FormInputContainer'>
            <input
              required
              type='text' 
              className='FormInput' 
              name='username'
              placeholder='Enter Your Name'
            />
          </div>
          <div className='FormInputContainer'>
            <input
              required
              type='email' 
              className='FormInput' 
              name='email'
              placeholder='Enter Email'
            />
          </div>
          <div className='FormInputContainer'>
            <input
              required
              type='text' 
              className='FormInput' 
              name='phoneNumber'
              placeholder='Enter Phone Number'
            />
          </div>
          <button
            type='submit'
            className='GetCallBack-Button Button'
          >{"Call me back"}</button>
        </form>
      </div>
    );
  }

  const renderComponents = () => {
    return (
      <div className='GetCallBack-Split'>
        { renderWhyUs() }
        { renderGetCallBackForm() }
      </div>
    );
  }

  const renderGetCallBack = () => {
    return (
      <section className='GetCallBack PaddedContainer'>
        <div className='ContainerWrapper'>
          { renderComponents() }
        </div>
      </section>
    );
  }

  return renderGetCallBack();
}

export default GetCallBackComponent;