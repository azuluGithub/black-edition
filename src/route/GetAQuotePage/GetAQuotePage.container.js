import { PureComponent } from 'react';
import { connect } from 'react-redux';

import GetAQuoteComponent from './GetAQuotePage.component';
import {GET_A_QUOTE, GET_A_QUOTE_ROUTE } from './GetAQuotePage.config';
import { routeAction } from '../../store/Route/Route.action';
import { overlayAction } from '../../store/Overlay/Overlay.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    routeAction: (route) => dispatch(routeAction(route)),
    overlayAction: (name) => dispatch(overlayAction(name)),
})

class GetAQuoteContainer extends PureComponent {

    setCurrentRoute() {
        const { routeAction } = this.props;
        
        const currentRoute = {
            name: GET_A_QUOTE,
            path: GET_A_QUOTE_ROUTE,
        };

        routeAction(currentRoute);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
            <GetAQuoteComponent />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetAQuoteContainer);