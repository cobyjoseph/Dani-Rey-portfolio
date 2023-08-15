<script lang="ts">
	// In the +page.server.ts file, I can return something other than 'data'. in this case, I am returning 'records', which drills down into the object. but whatever goes into the return needs to be accessed with export let data on +page.svelte

	export let data;
	console.log('records data', data);
</script>

{#each data.records as record}
	<div class="outline border m-4">
		<div class="bold text-xl">
			{record.name}
		</div>

		{record.text}
	</div>
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
