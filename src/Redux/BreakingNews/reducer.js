import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";

const initState = {
  isLoading: false,
  data: [],
  error: null,
};

export const Breakreducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }

    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
        error: null,
      };
    }

    case GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
