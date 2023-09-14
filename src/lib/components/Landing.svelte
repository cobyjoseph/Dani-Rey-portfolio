<script lang="ts">
	import landingGif from '$lib/assets/LandingGifImproved.gif';
	import { currentLanguage } from '$lib/stores/LanguageStore';
	import { draw, fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<img src={landingGif} alt="" class="w-full" />

<div
	class="  flex text-primaryDark text-xs font-bold font-dmSans justify-end w-[75%] mx-auto"
>
	<div
		class="outline-primaryDark outline outline-[1px] py-[14px] px-[18px] rounded-[30px] translateClamp"
	>
		{$currentLanguage === 'En' ? 'Graphic Design' : 'Diseño Gráfico'}
	</div>
</div>

<div class="translateClamp2 mx-auto lg:w-[75%] w-full">
	<div class="  h-[1px] bg-black" />

	<div class="text-primaryDark text-[44px] font-medium font-genSans mt-5 flex justify-between">
		<div>
			{$currentLanguage === 'En' ? 'HI! I’M DANI' : 'HOLA! SOY DANI'}
		</div>
		<div class="">
			{$currentLanguage === 'En' ? 'I WANNA MAKE YOU' : 'QUIERO HACERTE'}
		</div>
	</div>
	<div class="text-primaryDark text-[44px] font-medium font-genSans flex justify-between -mt-5">
		<div />
		<div class="">
			{$currentLanguage === 'En' ? 'LOOK GOOD' : 'VER BIEN'}
		</div>
	</div>
	<!-- text group -->
	<!-- left text -->
	<!-- right text -->
</div>

<style>
	.translateClamp {
		transform: translateY(clamp(-18rem, calc(-2rem - 12vw), -3rem));
	}

	.translateClamp2 {
		transform: translateY(clamp(-16rem, calc(-0rem - 12vw), -1rem));
	}
</style>
