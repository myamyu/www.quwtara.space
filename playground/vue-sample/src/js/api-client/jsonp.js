export default (url) => {
	return new Promise(function(resolve, reject) {
		const d = document, 
			sc = document.createElement('script'),
			cbName = `__jsonp_callback_${(new Date()).getTime()}`;
		window[cbName] = (res) => {
			delete window[cbName];
			sc.parentNode.removeChild(sc);
			resolve(res);
		};
		sc.src = `${url}&callback=${cbName}`;
		d.getElementsByTagName('head')[0].appendChild(sc);
	});
};
