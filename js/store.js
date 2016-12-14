import {createStore} from 'redux';

import * as reducers from './reducers/index';

 export default createStore(reducers.numberReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default createStore(reducers.numberReducer);