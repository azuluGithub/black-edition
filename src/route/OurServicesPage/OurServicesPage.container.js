import { PureComponent } from 'react';
import { connect } from 'react-redux';

import OurServicesPageComponent from './OurServicesPage.component';
import { OUR_SERVICES_PAGE, OUR_SERVICES_PAGE_ROUTE } from './OurServicesPage.config';
import { routeAction } from '../../store/Route/Route.action';
import { overlayAction } from '../../store/Overlay/Overlay.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    routeAction: (route) => dispatch(routeAction(route)),
    overlayAction: (name) => dispatch(overlayAction(name)),
})

class OurServicesPage extends PureComponent {

    setCurrentRoute() {
        const { routeAction } = this.props;
        
        const currentRoute = {
            name: OUR_SERVICES_PAGE,
            path: OUR_SERVICES_PAGE_ROUTE,
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
            <OurServicesPageComponent />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OurServicesPage);