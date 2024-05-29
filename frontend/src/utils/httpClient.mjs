export default class HttpClient {
	static async get(URL) {
		try {
			const res = await fetch(URL);
			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.message || 'Failed to fetch data');
			}

			return data.payload;
		} catch (error) {
			throw new Error(error.message || 'Failed to fetch data');
		}
	}

	static async post(URL, body) {
		try {
			const res = await fetch(URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			});
			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.message || 'Failed to post data');
			}

			return data.payload;
		} catch (error) {
			throw new Error(error.message || 'Failed to post data');
		}
	}
}
