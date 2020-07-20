export const GET_STATE_WISE_DETAILS = 'GET_STATE_WISE_DETAILS';
export const GET_STATE_WISE_DETAILS_SUCCESS = 'GET_STATE_WISE_DETAILS_SUCCESS';
export const GET_STATE_WISE_DETAILS_FAILURE = 'GET_STATE_WISE_DETAILS_FAILURE';

export const getStateWiseDetails = params => ({
  type: GET_STATE_WISE_DETAILS,
  payload: params,
});

export const getStateWiseDetailsSuccess = params => ({
  type: GET_STATE_WISE_DETAILS_SUCCESS,
  payload: params,
});

export const getStateWiseDetailsFailure = params => ({
  type: GET_STATE_WISE_DETAILS_FAILURE,
  payload: params,
});
