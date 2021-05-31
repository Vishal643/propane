import axios from 'axios';
import {
	GET_BANNER,
	GET_BANNER_FAILURE,
	GET_BANNER_REQUEST,
	GET_BANNER_SUCCESS,
} from './actionTypes';

const getAdsRequest = () => {
	return {
		type: GET_BANNER_REQUEST,
	};
};

const getAdsSuccess = (payload) => {
	return {
		type: GET_BANNER_SUCCESS,
		payload,
	};
};

const getAdsFailure = () => {
	return {
		type: GET_BANNER_FAILURE,
	};
};

const getBannerSuccess = (id, img) => {
	console.log(id, img);
	return {
		type: GET_BANNER,
		payload: { id, img },
	};
};

// fetching Both sides Banner Ads

const fetchAdsBannerById = (id) => (dispatch) => {
	dispatch(getAdsRequest());
	return axios
		.get(`https://toi-database.herokuapp.com/adsCorner/${id}`)
		.then((res) => {
			console.log(res);
			const { id, img } = res.data;
			const getBannerSuccessAction = getBannerSuccess(id, img);
			console.log(id, img);
			dispatch(getBannerSuccessAction);
		})
		.catch((err) => {
			dispatch(getAdsFailure());
		});
};

export { fetchAdsBannerById };
