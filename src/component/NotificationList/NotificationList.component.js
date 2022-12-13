import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification';
import { NotificationType } from '../../type/Notification';

import './NotificationList.style.scss';

class NotificationListComponent extends PureComponent {
    static propTypes = {
        notifications: PropTypes.arrayOf(NotificationType).isRequired,
    }

    renderNotifications() {
        const { notifications } = this.props;

        return notifications.map((notification) => <Notification notification={notification} key={notification.notificationsId} />)
    }

    renderNotificationListComponent() {
        const { notifications } = this.props;

        if (!notifications.length) {
            return ;
        }

        return (
            <div className='ContainerWrapper'>
                <div className='NotificationList'>
                   { this.renderNotifications() }
                </div>
            </div>
        );
    }

    render() {
        return this.renderNotificationListComponent();
    }
}

export default NotificationListComponent;