import axios from 'axios';
import {
	GET_TECH_NEWS_FAILURE,
	GET_TECH_NEWS_REQUEST,
	GET_TECH_NEWS_SUCCESS,
	GET_INDIVISUAL_NEWS_DATA_FAILURE,
	GET_INDIVISUAL_NEWS_DATA_SUCCESS,
	GET_INDIVISUAL_NEWS_DATA_REQUEST,
} from './actionTypes';

const getTechNewsRequest = () => ({
	type: GET_TECH_NEWS_REQUEST,
});
const getTechNewsSuccess = (payload) => ({
	type: GET_TECH_NEWS_SUCCESS,
	payload,
});
const getTechNewsFailure = () => ({
	type: GET_TECH_NEWS_FAILURE,
});

const getTechNews = (endPoint) => (dispatch) => {
	dispatch(getTechNewsRequest());
	return axios
		.get(`https://vishal-s-json-server.herokuapp.com/${endPoint}`)
		.then((res) => {
			dispatch(getTechNewsSuccess(res.data));
		})
		.catch((err) => {
			if (err) {
				dispatch(getTechNewsFailure());
			}
		});
};

const getIndivisualNewsDataRequest = () => {
	return {
		type: GET_INDIVISUAL_NEWS_DATA_REQUEST,
	};
};

const getIndivisualNewsDataSuccess = (payload) => {
	return {
		type: GET_INDIVISUAL_NEWS_DATA_SUCCESS,
		payload,
	};
};

const getIndivisualNewsDataFailure = () => {
	return {
		type: GET_INDIVISUAL_NEWS_DATA_FAILURE,
	};
};

const getIndivisualNewsData = (endPoint, id) => (dispatch) => {
	dispatch(getIndivisualNewsDataRequest());
	axios
		.get(`https://vishal-s-json-server.herokuapp.com/${endPoint}/${id}`)
		.then((res) => {
			const getDataSuccessAction = getIndivisualNewsDataSuccess(res.data);
			console.log(res.data);
			dispatch(getDataSuccessAction);
		})
		.catch((err) => {
			if (err) {
				dispatch(getIndivisualNewsDataFailure());
			}
		});
};
export { getTechNews, getIndivisualNewsData };
