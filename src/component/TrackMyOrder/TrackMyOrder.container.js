import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TrackMyOrderComponent from './TrackMyOrder.component';
import { showNotificationAction } from '../../store/Notification/Notification.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    showNotification: (notification) => dispatch(showNotificationAction(notification)),
});

class TrackMyOrder extends PureComponent {
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

    renderTrackMyOrder() {
        return (
            <TrackMyOrderComponent
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderTrackMyOrder();
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TrackMyOrder);