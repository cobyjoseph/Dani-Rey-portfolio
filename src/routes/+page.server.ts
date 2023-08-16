const airtableApiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
const airtableBaseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const airtableAboutTableId = import.meta.env.VITE_AIRTABLE_ABOUT_ID;
const aboutEndpoint = `https://api.airtable.com/v0/${airtableBaseId}/${airtableAboutTableId}?sort[0][field]=Order&sort[0][direction]=asc`;
//just create more endpoints for each table

export async function load({ fetch }) {
	const headers = {
		Authorization: `Bearer ${airtableApiKey}`,
		'Content-Type': 'application/json'
	};

	try {
		const res = await fetch(aboutEndpoint, { headers });
		if (!res.ok) {
			throw new Error(`Error fetching data: ${res.statusText}`);
		}

		const data = await res.json();

		const aboutTable = data.records.map((record) => ({
			nameEn: record.fields['Card name english'],
			nameSp: record.fields['Card name espagnol'],
			textEn: record.fields['Text english'],
			textSp: record.fields['Text espagnol']
		}));

		return {
			aboutTable
		};
	} catch (error) {
		console.error('Error in load:', error.message);
		return {
			status: 500,
			error: 'Failed fetching data from Airtable'
		};
	}
}
