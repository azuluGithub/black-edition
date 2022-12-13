import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { 
  NOTIFICATION_FAILURE_TYPE,  
  // NOTIFICATION_SUCCESS_TYPE, 
  NOTIFICATION_TIME_OUT_DURATION 
} from '../Notification/Notification.config';

import './TrackMyOrder.style.scss';

class TrackMyOrderComponent extends PureComponent {
  static propTypes = {
    showNotification: PropTypes.func.isRequired,
  }

  state = {
    orderId: '',
  }

  renderTitle() {
    return (
      <h2 className='TrackMyOrder-Title'>
        {'Enter Your Order Id'}
      </h2>
    );
  }

  checkForEmptyInputs() {
    const { orderId } = this.state;

    if (!orderId.trim().length) {
      return false;
    }
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();

    const { showNotification } = this.props;

    if (!this.checkForEmptyInputs()) {
      const notification = {
        notificationsId: `${Date.now()}${Math.floor(Math.random(234, 56754))}`,
        type: NOTIFICATION_FAILURE_TYPE,
        message: 'Please Fill Up All Fields',
      };
      showNotification(notification);
      return ;
    }
    
    const notification = {
      notificationsId: `${Date.now()}${Math.floor(Math.random(123, 45678))}`,
      type: NOTIFICATION_FAILURE_TYPE,
      message: 'Sorry the service is currently unavailable',
    }

    showNotification(notification);

    setTimeout(() => {
      this.setState({
        orderId: '',
      });
    }, NOTIFICATION_TIME_OUT_DURATION);
  }

  handleInputChange(e) {
    const { target: { name, value } } = e;

    this.setState({ [name]: value });
  }

  renderTrackMyOrderForm() {
    const { orderId } = this.state;

    return (
      <div className='TrackMyOrder-TrackMyOrderForm'>
        { this.renderTitle() }
        <div className='TrackMyOrder-Divider TrackMyOrder-Spaced'></div>
        <form className='TrackMyOrder-Form' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='FormInputContainer'>
            <input 
              type='text' 
              className='FormInput' 
              name='orderId' 
              value={orderId}
              placeholder='Enter Order Id'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <button
            type='submit'
            className='TrackMyOrder-Button Button'
          >{"Submit"}</button>
        </form>
      </div>
    );
  }

  renderTrackMyOrder() {
    return (
      <section className='TrackMyOrder PaddedContainer'>
        <div className='ContainerWrapper'>
          { this.renderTrackMyOrderForm() }
        </div>
      </section>
    );
  }

  render() {
    return this.renderTrackMyOrder();
  }
}

export default TrackMyOrderComponent;