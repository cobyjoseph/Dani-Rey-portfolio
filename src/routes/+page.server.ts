const airtableApiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
const airtableBaseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const airtableAboutTableId = import.meta.env.VITE_AIRTABLE_ABOUT_ID;
const airtableProjectsTableId = import.meta.env.VITE_AIRTABLE_PROJECTS_ID;
const aboutEndpoint = `https://api.airtable.com/v0/${airtableBaseId}/${airtableAboutTableId}?sort[0][field]=Order&sort[0][direction]=asc`;
const projectsEndpoint = `https://api.airtable.com/v0/${airtableBaseId}/${airtableProjectsTableId}`;
//just create more endpoints for each table

export async function load({ fetch }) {
	const headers = {
		Authorization: `Bearer ${airtableApiKey}`,
		'Content-Type': 'application/json'
	};

	try {
		const [aboutRes, projectsRes] = await Promise.all([
			fetch(aboutEndpoint, { headers }),
			fetch(projectsEndpoint, { headers })
		]);

		if (!aboutRes.ok || !projectsRes.ok) {
			throw new Error(`Error fetching data: ${aboutRes.statusText || projectsRes.statusText}`);
		}

		const [aboutData, projectsData] = await Promise.all([aboutRes.json(), projectsRes.json()]);

		const aboutTable = aboutData.records.map((record) => ({
			nameEn: record.fields['Card name english'],
			nameSp: record.fields['Card name espagnol'],
			textEn: record.fields['Text english'],
			textSp: record.fields['Text espagnol'],
			color: record.fields['Color']
		}));

		const projectsTable = projectsData.records.map((record) => ({
			titleEn: record.fields['Title english'],
			titleSp: record.fields['Title espagnol'],
			photo: record.fields['Photo'] ? record.fields['Photo'][0].url : null,
			descriptionEn: record.fields['Description english'],
			descriptionSp: record.fields['Description espagnol'],
			linkTitleEn: record.fields['Link title english'],
			linkTitleSp: record.fields['Link title espagnol'],
			link: record.fields['Link'],

			identidadMarca: record.fields['Identidad de Marca'],
			kitIdentidad: record.fields['Kit de Identidad de Marca'],
			disenoWeb: record.fields['Diseño Web'],
			disenoPapeleria: record.fields['Diseño de Papelería'],
			disenoRedes: record.fields['Diseño de Redes Sociales'],
			estrategia: record.fields['Estrategia'],
			disenoPackaging: record.fields['Diseño de Packaging'],
			disenoProducto: record.fields['Diseño de Producto'],
			disenoUxUi: record.fields['Diseño UX/UI'],
			cobranding: record.fields['Cobranding']
		}));

		return {
			aboutTable,
			projectsTable
		};
	} catch (error) {
		console.error('Error in load:', error.message);
		return {
			status: 500,
			error: 'Failed fetching data from Airtable'
		};
	}
}
