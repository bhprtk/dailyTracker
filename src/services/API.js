import axios from 'axios';

const nutritionixAutocomplete = (value) => {
	return axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${value}`, {
		headers: {
			'x-app-id': 'bd3146c4',
			'x-app-key': 'e398e6b604b07c6171e5483bab832f74'
		}
	})
		.then(data => data)
		.catch(error => console.log ('error:', error))
};

const getFoodItemInfo = (value) => {
	return axios({
		method: 'post',
		url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
		data: {
		  query: value
		},
		headers: {
			'x-app-id': 'bd3146c4',
			'x-app-key': 'e398e6b604b07c6171e5483bab832f74'
		}
	})
		.then(data => data.data)
		.catch(error => console.log ('error:', error))
}

export default {
	nutritionixAutocomplete,
	getFoodItemInfo
};
