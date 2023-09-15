<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Project from '$lib/components/Project.svelte';
	import DevGrid from '$lib/components/DevGrid.svelte';
	import Landing from '$lib/components/Landing.svelte';

	// In the +page.server.ts file, I can return something other than 'data'. in this case, I am returning 'records', which drills down into the object. but whatever goes into the return needs to be accessed with export let data on +page.svelte
	export let data;
	console.log('data', data);
	console.log('about table', data.aboutTable);
</script>

<svg
	class="absolute -z-10 w-full top-5"
	width="1728"
	height="737"
	viewBox="0 0 1728 737"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M1898.22 637.765C1898.22 637.765 1768.54 830.24 1567.49 615.525C1366.44 400.811 1396.76 207.241 1561.35 256.448C1725.94 305.656 1664.18 656.753 1467 646.171C1296.58 637.016 1224.87 416.491 1267.91 346.326C1310.96 276.16 1395.24 493.595 1180.93 635.771C1046.62 724.884 766.564 689.417 559.971 605.976C353.378 522.536 64.7304 353.282 175.708 120.051C286.686 -113.181 689.66 91.8131 570.185 407.019C450.709 722.226 18.1198 627.759 -207.014 492.885"
		stroke="#F6F2D0"
		stroke-width="38"
		stroke-miterlimit="10"
	/>
</svg>

<div class="flex justify-center font-genSans">
	<div class="flex flex-col max-w-[86%] w-[1530px]">
		<!-- <DevGrid /> -->
		<div class="mt-[3rem]">
			<Navbar />
		</div>
		<div class=" -translate-y-[4rem] lg:-translate-y-[10rem]">
			<Landing />
			<div class=" -translate-y-[8rem] 2xl:-translate-y-[12rem]">
				<About aboutData={data.aboutTable} />
				<div class="mt-10">
					<Project projectsData={data.projectsTable} />
				</div>
			</div>
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
