import { useRef } from 'react';

import {
  NOTIFICATION_SUCCESS_TYPE,
} from '../Notification/Notification.config';

import './GetAQuote.style.scss';

const GetAQuoteComponent = ({ showNotification }) => {
  const formRef = useRef();

  const renderTitle = () => {
    return (
      <p className='GetAQuote-Title'>
        {'Get A Quote'}
      </p>
    );
  }

  const renderAddress = () => {
    return (
      <div className='GetAQuote-Address'>
        <div className='GetAQuote-AddressItem'>
          <p className='GetAQuote-AddressItemTitle'>{'Need Help?'}</p>
          <p className='GetAQuote-AddressItemText'>{'You can give us a call, chat with us on WhatsApp, or send us an email, details below.'}</p>
        </div>
        <div className='GetAQuote-AddressItem'>
          <p className='GetAQuote-AddressItemTitle'>{'Phone'}</p>
          <p className='GetAQuote-AddressItemText GetAQuote-AddressItemText_Active'>{'(087) 550 1921 | (063) 489 6117'}</p>
        </div>
        <div className='GetAQuote-AddressItem'>
          <p className='GetAQuote-AddressItemTitle'>{'Email Address'}</p>
          <p className='GetAQuote-AddressItemText GetAQuote-AddressItemText_Active'>{'info@we4ulogistics.co.za'}</p>
        </div>
      </div>
    );
  }

  const renderMoreInfo = () => {
    return (
      <div className='GetAQuote-MoreInfo'>
          <p className='GetAQuote-MoreInfoItemTitle'>{'Assurance!'}</p>
          <p className='GetAQuote-MoreInfoItemText'>{'Our operating hours are every weekday from 7:30am - 6:00pm, and every weekend and holidays from 8:00am-3:00pm'}</p>
          <p className='GetAQuote-MoreInfoItemText'>{'Should your items be on the move with us, you have 24/7 support for your peace of mind. We pride ourselves with our remarkable turn around time on both queries and requests, with us you wont wait long.Anytime you need us, we will always be there.'}</p>
      </div>
    );
  }

  const renderInfo = () => {
    return (
      <div className='GetAQuote-Info'>
        { renderAddress() }
        { renderMoreInfo() }
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const notification = {
      notificationsId: `${Date.now()}${Math.floor(Math.random(123, 45678))}`,
      type: NOTIFICATION_SUCCESS_TYPE,
      message: 'Thanks for reaching out to us. We will come back to you as soon as we can',
    }

    showNotification(notification);
  }

  const renderGetAQuoteForm = () => {
    return (
      <div className='GetAQuote-GetAQuoteForm'>
        { renderTitle() }
        <div className='GetAQuote-Divider'></div>
        <form ref={formRef} className='GetAQuote-Form' onSubmit={handleSubmit}>
          <div className='FormInputContainer'>
            <label className='FormLabel'>{'Enter your first name'}</label>
            <input
              required
              type='text' 
              className='FormInput' 
              name='firstname'
            />
          </div>
          <div className='FormInputContainer'>
            <label className='FormLabel'>{'Enter your last name'}</label>
            <input
              required
              type='text' 
              className='FormInput' 
              name='lastname'
            />
          </div>
          <div className='FormInputContainer'>
            <label className='FormLabel'>{'Enter your Email'}</label>
            <input
              required
              type='email' 
              className='FormInput' 
              name='userEmail'
            />
          </div>
          <div className='FormInputContainer'>
            <label className='FormLabel'>{'Enter your phone number'}</label>
            <input
              required
              type='text' 
              className='FormInput' 
              name='phoneNumber'
            />
          </div>
          <div className='FormInputContainer'>
            <label className='FormLabel'>{'Enter your collection address'}</label>
            <input
              required
              type='text' 
              className='FormInput' 
              name='collectionAddress'
            />
          </div>
          <div className='FormInputContainer'>
            <label className='FormLabel'>{'Enter your delivery Address'}</label>
            <input
              required
              type='text' 
              className='FormInput' 
              name='deliveryAddress'
            />
          </div>
          <div className='FormInputContainer'>
            <label className='FormLabel'>{'Select moving date'}</label>
            <input
              required
              type="date" 
              className='FormInput'
              name={'movingDate'}
            />
          </div>
          <div className='FormInputContainer'>
            <label className='FormLabel'>{'inventory list'}</label>
            <textarea
              required
              className='GetAQuote-TextArea FormTextArea'
              name='inventoryList'
              placeholder='Please Paste Your Inventory List Here...'
            ></textarea>
          </div>
          <button
            type='submit'
            className='GetAQuote-Button Button'
          >{"Get A Quote"}</button>
        </form>
      </div>
    );
  }

  const renderComponents = () => {
    return (
      <div className='GetAQuote-Split'>
        { renderInfo() }
        { renderGetAQuoteForm() }
      </div>
    );
  }

  const renderGetAQuote = () => {
    return (
      <section className='GetAQuote PaddedContainer'>
        <div className='ContainerWrapper'>
          { renderComponents() }
        </div>
      </section>
    );
  }

  return renderGetAQuote();
}

export default GetAQuoteComponent;