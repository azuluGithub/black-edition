import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import FooterDetailsComponent from './FooterDetails.component';

class FooterDetails extends PureComponent {

    renderFooterDetails() {
        return (
            <FooterDetailsComponent />
        );
    }

    render() {
        return this.renderFooterDetails();
    }
}

export default withRouter(FooterDetails);