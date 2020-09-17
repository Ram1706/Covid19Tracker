import {combineReducers} from 'redux';
import {getStateWiseTrackerDetails} from '../screens/tracker/services/reducers';
import {getStateWiseDailyDetails,getAgeWiseDetails} from '../screens/dashboards/services/reducers';

const rootReducer = combineReducers({
  getStateWiseTrackerDetails,
  getStateWiseDailyDetails,
  getAgeWiseDetails,
});

export default rootReducer;
