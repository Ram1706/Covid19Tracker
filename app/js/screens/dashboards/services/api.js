import {httpError} from '../../../config/services';
import axios from 'axios';
import urls from '../../../config/url';

export const getStateWiseDailyDetailsApi = params =>
  axios
    .get(urls.stateWiseDailyIncreaseDetails, params)
    .then(response => response)
    .catch(err => httpError(err));

export const getAgeWiseDetailsApi = params =>
  axios
    .get(urls.ageWiseDetails, params)
    .then(response => response)
    .catch(err => httpError(err));
