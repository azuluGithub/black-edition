import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GetCallBackComponent from './GetCallBack.component';
import { showNotificationAction } from '../../store/Notification/Notification.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    showNotification: (notification) => dispatch(showNotificationAction(notification)),
});

class GetCallBack extends PureComponent {
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

    renderGetCallBack() {
        return (
            <GetCallBackComponent
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderGetCallBack();
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (GetCallBack);