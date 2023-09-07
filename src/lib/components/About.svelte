<script lang="ts">
	import { currentLanguage } from '$lib/stores/LanguageStore';
	import InView from '$lib/components/InView.svelte';
	import aboutTextSp from '$lib/assets/AboutTextSp.svg';

	export let aboutData;

	let scrollY: number;

	function formatText(text) {
		// Split the text by new lines to create paragraphs
		const paragraphs = text.split('\n');

		// Format each paragraph
		const formattedParagraphs = paragraphs.map((paragraph) => {
			let formatted = paragraph;

			// Bold
			formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<span class="font-medium">$1</span>');
			formatted = formatted.replace(/__(.+?)__/g, '<span class="font-medium">$1</span>');

			// Italic
			formatted = formatted.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
			formatted = formatted.replace(/(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/g, '<em>$1</em>');

			return `<p class="my-[0.3rem] xl:my-[0.4rem]">${formatted}</p>`;
		});

		return formattedParagraphs.join('');
	}
</script>

<svelte:window bind:scrollY />;

{scrollY}

<div class="grid grid-cols-6 row gap-[40px] outline">
	<div class=" col-span-2 flex items-center justify-center outline">
		<div class=" w-[93%]">
			{#if $currentLanguage === 'En'}
				<img src={aboutTextSp} alt="" class="w-full" />
			{/if}
		</div>
	</div>

	<!-- CARDS BELOW -->
	{#each aboutData as i, index}
		<div
			class="row-span-1 outline w-full {index === 0
				? 'col-start-3 col-end-6'
				: 'col-start-6 col-end-auto'} {index === 1 ? 'overflow-card' : ''}"
		>
			<InView let:isVisible>
				{isVisible}
				<div style={`${index === 1 ? `transform: translateX(-${scrollY}px)` : ''}`} class="">
					<div
						class="text-xl xl:text-2xl p-5 col-span-4 max-w-fit translate-y-[50%] font-medium border rounded-2xl {i.color ===
						'Dark'
							? 'bg-primaryDark border-primary text-primary'
							: 'bg-primary border-primaryDark text-primaryDark'}"
					>
						{$currentLanguage === 'En' ? i.nameEn : i.nameSp}
					</div>
					<div
						class="text-[18px] xl:text-[22px] px-7 pt-[3.4rem] pb-[1rem] whitespace-pre-line border rounded-2xl flex flex-1 flex-col {i.color ===
						'Dark'
							? 'bg-primaryDark border-primary text-primary'
							: 'bg-primary border-primaryDark text-primaryDark'}"
					>
						{@html formatText($currentLanguage === 'En' ? i.textEn : i.textSp)}
					</div>
				</div>
			</InView>
		</div>
	{/each}
</div>

<div class="mb-[10rem]">hi</div>

<style>
	.overflow-card {
		grid-column-start: 6;
		grid-column-end: 9;
		width: calc(100% * 3); /* Force it to take the width of 3 columns */
	}
</style>
