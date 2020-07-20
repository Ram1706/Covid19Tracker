import {
  GET_STATE_WISE_DETAILS,
  GET_STATE_WISE_DETAILS_SUCCESS,
  GET_STATE_WISE_DETAILS_FAILURE,
} from './action';

const initialState = {
  loading: false,
  data: [],
  error: [],
  navigate: '',
};

export const getStateWiseTrackerDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE_WISE_DETAILS:
      return {
        ...state,
        loading: true,
        data: [],
        error: [],
      };
    case GET_STATE_WISE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: [],
      };
    case GET_STATE_WISE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
