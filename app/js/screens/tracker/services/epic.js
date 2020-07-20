import 'rxjs';
import {
  GET_STATE_WISE_DETAILS,
  getStateWiseDetailsSuccess,
  getStateWiseDetailsFailure,
} from './action';
import {getStateWiseTrackerDetailsApi} from './api';

export const getStateWiseDetailsEpic = action$ =>
  action$.ofType(GET_STATE_WISE_DETAILS).mergeMap(action =>
    getStateWiseTrackerDetailsApi(action.payload)
      .then(result => {
        if (result && result.data) {
          return getStateWiseDetailsSuccess(result.data);
        }
        return getStateWiseDetailsFailure('InvalidDetails');
      })
      .catch(err => getStateWiseDetailsFailure(err)),
  );
