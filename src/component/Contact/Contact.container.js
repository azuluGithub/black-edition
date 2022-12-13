import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactComponent from './Contact.component';
import { showNotificationAction } from '../../store/Notification/Notification.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    showNotification: (notification) => dispatch(showNotificationAction(notification)),
});

class Contact extends PureComponent {
    static propTypes = {
        showNotification: PropTypes.func.isRequired,
    }

    containerProps() {}

    containerFunctions() {
        const { showNotification } = this.props;

        return {
            showNotification,
        }
    }

    renderContact() {
        return (
            <ContactComponent
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderContact();
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Contact);