import request from './request';

export default () =>
	fetch(request({ route: '/json/categories.json', method: 'get' }));
