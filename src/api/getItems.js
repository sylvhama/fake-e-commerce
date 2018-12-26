import request from './request';

export default () =>
	fetch(request({ route: '/json/items.json', method: 'get' }));
