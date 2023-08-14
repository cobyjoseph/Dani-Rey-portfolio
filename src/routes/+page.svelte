<script lang="ts">
	export let data;
	console.log('records data', data.records);
</script>

{#each data.records as record}
	{record.name}
	{record.text}
{/each}

<svelte:head>
	<link
		href="https://api.fontshare.com/v2/css?f[]=general-sans@701,200,500,301,201,300,601,600,401,501,400,700"
		rel="stylesheet"
	/>

	<title>Dani Rey - Web and graphic designer</title>
	<meta
		name="description"
		content="Daniella Rey, a freelance designer, creates interactive, custom, website and graphic design."
	/>
</svelte:head>
