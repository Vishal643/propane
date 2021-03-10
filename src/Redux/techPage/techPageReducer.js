import {
	GET_TECH_NEWS_FAILURE,
	GET_TECH_NEWS_REQUEST,
	GET_TECH_NEWS_SUCCESS,
} from './actionTypes';

const initialState = {
	newsData: [],
	isLoading: false,
	isError: false,
};

export const techPageReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_TECH_NEWS_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}
		case GET_TECH_NEWS_SUCCESS: {
			return {
				...state,
				newsData: [payload],
				isLoading: false,
				isError: false,
			};
		}
		case GET_TECH_NEWS_FAILURE: {
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		}
		default: {
			return state;
		}
	}
};
