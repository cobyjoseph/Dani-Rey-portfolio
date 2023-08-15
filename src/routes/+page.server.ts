// import { AIRTABLE_BASE_ID, AIRTABLE_API_KEY } from '$env/static/private';

import type { PageServerLoad } from './$types';

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_ABOUT_ID = import.meta.env.VITE_AIRTABLE_ABOUT_ID;
const aboutEndpoint = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_ABOUT_ID}`;

console.log(aboutEndpoint);

export async function load({ fetch }) {
	const headers = {
		Authorization: `Bearer ${AIRTABLE_API_KEY}`,
		'Content-Type': 'application/json'
	};

	try {
		const res = await fetch(aboutEndpoint, { headers });
		if (!res.ok) {
			throw new Error(`Error fetching data: ${res.statusText}`);
		}

		const data = await res.json();
		console.log('Raw data:', data);
		console.log('Fields before map:', data.records[0].fields);

		const records = data.records.map((record) => ({
			name: record.fields['Card name'],
			text: record.fields.Text
		}));

		return {
			records
		};
	} catch (error) {
		console.error('Error in load:', error.message);
		return {
			status: 500,
			error: 'Failed fetching data from Airtable'
		};
	}
}
