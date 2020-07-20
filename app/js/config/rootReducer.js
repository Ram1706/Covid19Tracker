import {combineReducers} from 'redux';
import {getStateWiseTrackerDetails} from '../screens/tracker/services/reducers';

const rootReducer = combineReducers({
  getStateWiseTrackerDetails,
});

export default rootReducer;
