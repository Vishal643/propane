import axios from 'axios';
import {
	API_MOCKER_FAILURE,
	API_MOCKER_REQUEST,
	API_MOCKER_SUCCESS,
} from './actionTypes';

export let apiMockerRequest = (payload) => {
	return {
		type: API_MOCKER_REQUEST,
	};
};

export let apiMockerSuccess = (payload) => {
	console.log(payload, 'success');
	return {
		type: API_MOCKER_SUCCESS,
		payload: payload,
	};
};

export let apiMockerFailure = (payload) => {
	console.log(payload, 'failure');
	return {
		type: API_MOCKER_FAILURE,
		payload: payload,
	};
};

export let fetchLoginData = (payload) => (dispatch) => {
	dispatch(apiMockerRequest());
	console.log(payload, 'datafetch');

	let config = {
		method: 'post',
		url: 'https://masai-api-mocker.herokuapp.com/auth/login',

		data: payload,
	};

	return axios(config)
		.then((res) => {
			dispatch(
				apiMockerSuccess({ token: res.data.token, username: payload.username }),
			);
		})
		.catch((err) => {
			console.log(err);
			if (err) {
				dispatch(apiMockerFailure(err));
			}
		});
};
