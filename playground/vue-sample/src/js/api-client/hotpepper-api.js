import jsonp from './jsonp';
const baseUrl = 'https://webservice.recruit.co.jp/hotpepper';

const callApi = (endPoint, params = {}) => {
	let url = `${baseUrl}${endPoint}?key=53f0c0d58595a883&format=jsonp`;
	Object.keys(params).forEach((key) => {
		const param = params[key];
		url += `&${key}=${encodeURIComponent(Array.isArray(param) ? param.join(',') : param)}`;
	});
	return jsonp(url);
};

export function largeArea(param) {return callApi('/large_area/v1/', param);}
export function middleArea(param) {return callApi('/middle_area/v1/', param);}
export function smallArea(param) {return callApi('/small_area/v1/', param);}
