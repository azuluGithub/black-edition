import { cloneElement, PureComponent, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loader from '../Loader';
import NotificationList from '../NotificationList';
import HomePage from '../../route/HomePage';
import GetAQuotePage from '../../route/GetAQuotePage';
import NoMatch from '../../route/NoMatch';
import AboutPage from '../../route/AboutPage';
import ContactPage from '../../route/ContactPage';
import OurServicesPage from '../../route/OurServicesPage';
import TrackMyOrder from '../../route/TrackMyOrder';

import { TOP_ELEMENTS, MAIN_ELEMENTS } from './Router.config';

class RouterComponent extends PureComponent {

  [TOP_ELEMENTS] = [
    { component: <NotificationList key='notificationsList'/> },
  ];

  [MAIN_ELEMENTS] = [
    { component: <Route exact path="/" component={HomePage} key='home'/> },
    { component: <Route path="/about" component={AboutPage} key='about'/> },
    { component: <Route path="/get-a-quote" component={GetAQuotePage} key='get-a-quote'/> },
    { component: <Route path="/our-services" component={OurServicesPage} key='our-services'/> },
    { component: <Route path="/contact/:id" component={ContactPage} key='contact'/> },
    { component: <Route path="/track-my-order" component={TrackMyOrder} key='track my order'/> },
    { component: <Route component={NoMatch} key='nomatch'/> },
  ];

  renderElements(ELEMENTS) {
    return this[ELEMENTS].map(({ component }) => cloneElement(component));
  }

  renderLoader() {
    return <Loader />;
  }

  renderMainElements() {
    return (
      <Suspense fallback={this.renderLoader()}>
        <Switch>
          { this.renderElements(MAIN_ELEMENTS) }
        </Switch>
      </Suspense>
    );
  }

  renderRouter() {
    return (
      <BrowserRouter>
        { this.renderElements(TOP_ELEMENTS) }
        { this.renderMainElements() }
      </BrowserRouter>
    );
  }

  render() {
    return this.renderRouter();
  }
}

export default RouterComponent;
