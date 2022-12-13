import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GetAQuoteComponent from './GetAQuote.component';
import { showNotificationAction } from '../../store/Notification/Notification.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    showNotification: (notification) => dispatch(showNotificationAction(notification)),
});

class GetAQuote extends PureComponent {
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

    renderGetAQuote() {
        return (
            <GetAQuoteComponent
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderGetAQuote();
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (GetAQuote);