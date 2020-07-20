import {httpError} from '../../../config/services';
import axios from 'axios';
import urls from '../../../config/url';

export const getStateWiseTrackerDetailsApi = params =>
  axios
    .get(urls.stateWiseDetails, params)
    .then(response => response)
    .catch(err => httpError(err));
