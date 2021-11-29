import axios from 'axios';
import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
} from './actionTypes';

const getDataRequest = () => {
	return {
		type: GET_DATA_REQUEST,
	};
};

const getDataSuccess = (payload) => {
	return {
		type: GET_DATA_SUCCESS,
		payload,
	};
};

const getDataFailure = () => {
	return {
		type: GET_DATA_FAILURE,
	};
};

const fetchData = (params) => (dispatch) => {
	dispatch(getDataRequest());
	axios
		.get('https://vishal-s-json-server.herokuapp.com/top_news')
		.then((res) => {
			const getDataSuccessAction = getDataSuccess(res.data);

			dispatch(getDataSuccessAction);
		})
		.catch((err) => {
			dispatch(getDataFailure());
		});
};

export { fetchData };
