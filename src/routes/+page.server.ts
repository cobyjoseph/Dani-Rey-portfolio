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

		// if (!res.ok) {
		// 	throw new Error(`Error fetching data: ${res.statusText}`);
		// }

		const data = await res.json();
		console.log('Airtable data:', data);

		const records = data.records.map((record) => ({
			name: record.fields.fld3hToameRi5Ehee,
			text: record.fields.fldmZb5lYlCdwtiKc
		}));

		return {
			records
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Failed fetching data from Airtable'
		};
	}
}

// export async function load() {
// 	// Fetch records from Airtable
// 	const records = await fetchRecords();

// 	// Return data to page
// 	return {
// 		props: {
// 			records
// 		}
// 	};
// }
// export async function load() {
// 	return {
// 		records: [
// 			{
// 				name: 'About me',
// 				text: "Hi, I'm Dani :)\n\nGraphic design is not my passion. Visual communication of messages is. I love getting involved in the microworld of the brands I work..."
// 			},
// 			{
// 				name: 'About you',
// 				text: '**You have an idea**, or a project with a great potential, and a lot of enthusiasm to see it become a giant in its field; but you have a missing piece...'
// 			}
// 		]
// 	};
// }
