import axios from 'axios';
import {
	GET_TECH_NEWS_FAILURE,
	GET_TECH_NEWS_REQUEST,
	GET_TECH_NEWS_SUCCESS,
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
		.get(`https://fake-mocker.herokuapp.com/${endPoint}`)
		.then((res) => {
			dispatch(getTechNewsSuccess(res.data));
		})
		.catch((err) => {
			if (err) {
				dispatch(getTechNewsFailure());
			}
		});
};

export { getTechNews };
