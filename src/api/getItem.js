import request from './request';

export default id =>
	fetch(request({ route: '/json/items.json', method: 'get' }))
		.then(res => res.json())
		.then(json => {
			const item = json.data.find(item => item.id === id);
			if (item) {
				const blob = new Blob([JSON.stringify(item)], {
					type: 'application/json'
				});
				return Promise.resolve(new Response(blob, { status: 200 }));
			} else return Promise.reject({ error: 'Item not found' });
		});
