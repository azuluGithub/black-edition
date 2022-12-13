import { overlayReducer } from './Overlay/Overlay.reducer';
import { routeReducer } from './Route/Route.reducer';
import { notificationReducer } from './Notification/Notification.reducer';

const reducersObject = {
  overlayReducer,
  routeReducer,
  notificationReducer,
}

class InjectStaticReducers {
  registerReducers(store) {
    for (let reducerKey in reducersObject) {
      store.injectReducer(reducerKey, reducersObject[reducerKey]);
    }

    return store;
  }
}

export default new InjectStaticReducers();