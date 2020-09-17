export const GET_STATE_WISE_DAILY_DETAILS = 'GET_STATE_WISE_DAILY_DETAILS';
export const GET_STATE_WISE_DAILY_DETAILS_SUCCESS =
  'GET_STATE_WISE_DAILY_DETAILS_SUCCESS';
export const GET_STATE_WISE_DAILY_DETAILS_FAILURE =
  'GET_STATE_WISE_DAILY_DETAILS_FAILURE';

export const GET_AGE_WISE_DETAILS = 'GET_AGE_WISE_DETAILS';
export const GET_AGE_WISE_DETAILS_SUCCESS = 'GET_AGE_WISE_DETAILS_SUCCESS';
export const GET_AGE_WISE_DETAILS_FAILURE = 'GET_AGE_WISE_DETAILS_FAILURE';

export const getStateWiseDailyDetails = params => ({
  type: GET_STATE_WISE_DAILY_DETAILS,
  payload: params,
});

export const getStateWiseDailyDetailsSuccess = params => ({
  type: GET_STATE_WISE_DAILY_DETAILS_SUCCESS,
  payload: params,
});

export const getStateWiseDailyDetailsFailure = params => ({
  type: GET_STATE_WISE_DAILY_DETAILS_FAILURE,
  payload: params,
});

export const getAgeWiseDetails = params => ({
  type: GET_AGE_WISE_DETAILS,
  payload: params,
});

export const getAgeWiseDetailsSuccess = params => ({
  type: GET_AGE_WISE_DETAILS_SUCCESS,
  payload: params,
});

export const getAgeWiseDetailsFailure = params => ({
  type: GET_AGE_WISE_DETAILS_FAILURE,
  payload: params,
});
