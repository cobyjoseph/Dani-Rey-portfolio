<script lang="ts">
	import { currentLanguage } from '$lib/stores/LanguageStore';
	import InView from '$lib/components/InView.svelte';
	import aboutTextSp from '$lib/assets/AboutTextSp.svg';

	export let aboutData: number;

	let cardHeight: number;

	let scrollY: number;

	let dynamicRootMargin: string;

	let gridColumnWidth = 0; // You'll get this value dynamically.
	let columnGap = 40; // The gap between your grid columns.
	let endPosition = gridColumnWidth * 3 + columnGap * 2; // Example, this depends on your specific grid setup.

	let translateX: number;

	$: {
		// Assuming `endPosition` is your end position and 1000 is some scrollY position where the transition should end
		let scrollFactor = scrollY / 1000;

		if (scrollFactor >= 1) scrollFactor = 1; // cap it to 1
		if (scrollFactor < 0) scrollFactor = 0; // minimum zero

		translateX = scrollFactor * endPosition;
	}

	$: if (cardHeight) {
		dynamicRootMargin = `0px 0px -${cardHeight}px 0px`;
	}

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
CARD HEIGHT {cardHeight}

<div class="bg-blue-200">
	dynamic root margin : {dynamicRootMargin}
</div>

<div>
	end position: {endPosition}
</div>

<div class="grid grid-cols-6 row gap-[40px] border">
	<div class=" col-span-2 flex items-center justify-center border border-green-400">
		<div class=" w-[93%]">
			{#if $currentLanguage === 'En'}
				<img src={aboutTextSp} alt="" class="w-full" />
			{/if}
		</div>
	</div>

	<!-- CARDS BELOW -->
	<!-- {#each aboutData as i, index}
		<div
			class="row-span-1 border border-red-500 w-full {index === 0
				? 'col-start-3 col-end-6'
				: 'col-start-6 col-end-auto'} {index === 1 ? 'overflow-card ' : ''}"
		>
			<InView {dynamicRootMargin} let:isVisible>
				{isVisible}
				<div
					bind:clientHeight={cardHeight}
					style={`${index === 1 && isVisible ? `transform: translateX(-${translateX}px)` : ''}`}
					class=""
				>
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
	{/each} -->
</div>

<div class="mb-[10rem]">hi</div>

<style>
	.overflow-card {
		grid-column-start: 6;
		/* grid-column-end: 9; */
		width: calc(100% * 3); /* Force it to take the width of 3 columns */
	}
</style>
