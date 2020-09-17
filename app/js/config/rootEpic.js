import {combineEpics} from 'redux-observable';
import {getStateWiseDetailsEpic} from '../screens/tracker/services/epic';
import {
  getStateWiseDailyDetailsEpic,
  getAgeWiseDetailsEpic,
} from '../screens/dashboards/services/epic';
const rootEpic = combineEpics(
  getStateWiseDetailsEpic,
  getStateWiseDailyDetailsEpic,
  getAgeWiseDetailsEpic,
);

export default rootEpic;
