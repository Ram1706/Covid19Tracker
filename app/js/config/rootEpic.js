import {combineEpics} from 'redux-observable';
import {getStateWiseDetailsEpic} from '../screens/tracker/services/epic';
const rootEpic = combineEpics(getStateWiseDetailsEpic);

export default rootEpic;
