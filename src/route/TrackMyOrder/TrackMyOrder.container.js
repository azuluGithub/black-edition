import { PureComponent } from 'react';
import { connect } from 'react-redux';

import TrackMyOrderComponent from './TrackMyOrder.component';
import { TRACK_MY_ORDER_PAGE, TRACK_MY_ORDER_PAGE_ROUTE } from './TrackMyOrder.config';
import { routeAction } from '../../store/Route/Route.action';
import { overlayAction } from '../../store/Overlay/Overlay.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    routeAction: (route) => dispatch(routeAction(route)),
    overlayAction: (name) => dispatch(overlayAction(name)),
})

class TrackMyOrder extends PureComponent {

    setCurrentRoute() {
        const { routeAction } = this.props;
        
        const currentRoute = {
            name: TRACK_MY_ORDER_PAGE,
            path: TRACK_MY_ORDER_PAGE_ROUTE,
        };

        routeAction(currentRoute);
    }

    componentDidMount() {
        this.setCurrentRoute();
        this.closeOverLay();
    }

    componentDidUpdate(prevProps) {
        this.closeOverLay();
    }

    closeOverLay() {
        const { overlayAction } = this.props;

        return overlayAction('');
    }

    renderComponent() {
        return (
            <TrackMyOrderComponent />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackMyOrder);