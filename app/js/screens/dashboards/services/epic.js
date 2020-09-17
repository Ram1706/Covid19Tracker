import 'rxjs';
import {
  GET_STATE_WISE_DAILY_DETAILS,
  getStateWiseDailyDetailsSuccess,
  getStateWiseDailyDetailsFailure,
  GET_AGE_WISE_DETAILS,
  getAgeWiseDetailsSuccess,
  getAgeWiseDetailsFailure,
} from './action';
import {getStateWiseDailyDetailsApi, getAgeWiseDetailsApi} from './api';

export const getStateWiseDailyDetailsEpic = action$ =>
  action$.ofType(GET_STATE_WISE_DAILY_DETAILS).mergeMap(action =>
    getStateWiseDailyDetailsApi(action.payload)
      .then(result => {
        if (result && result.data) {
          return getStateWiseDailyDetailsSuccess(result.data);
        }
        return getStateWiseDailyDetailsFailure('InvalidDetails');
      })
      .catch(err => getStateWiseDailyDetailsFailure(err)),
  );

export const getAgeWiseDetailsEpic = action$ =>
  action$.ofType(GET_AGE_WISE_DETAILS).mergeMap(action =>
    getAgeWiseDetailsApi(action.payload)
      .then(result => {
        if (result && result.data) {
          return getAgeWiseDetailsSuccess(result.data.raw_data);
        }
        return getAgeWiseDetailsFailure('InvalidDetails');
      })
      .catch(err => getAgeWiseDetailsFailure(err)),
  );
