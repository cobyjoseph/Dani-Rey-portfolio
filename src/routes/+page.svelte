<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Project from '$lib/components/Project.svelte';

	// In the +page.server.ts file, I can return something other than 'data'. in this case, I am returning 'records', which drills down into the object. but whatever goes into the return needs to be accessed with export let data on +page.svelte
	export let data;
	console.log('data', data);
	console.log('about table', data.aboutTable);
</script>

<div class="flex justify-center font-genSans">
	<div class="flex flex-col max-w-[92%] w-[1530px]">
		<div class="mt-[2rem]">
			<Navbar />
		</div>
		<div class="mt-[50vh]">
			<About aboutData={data.aboutTable} />
			<Project />
		</div>
	</div>
</div>

<svelte:head>
	<link
		href="https://api.fontshare.com/v2/css?f[]=general-sans@701,200,500,301,201,300,601,600,401,501,400,700"
		rel="stylesheet"
	/>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000"
		rel="stylesheet"
	/>

	<title>Dani Rey - Web and graphic designer</title>
	<meta
		name="description"
		content="Daniella Rey, a freelance designer, creates interactive, custom, website and graphic design."
	/>
</svelte:head>
