<script lang="ts">
	import { currentLanguage } from '$lib/stores/LanguageStore';

	export let aboutData;

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

			return `<p class="my-[0.4rem]">${formatted}</p>`;
		});

		return formattedParagraphs.join('');
	}

	// function formatText(text) {
	// 	// Bold IF I USE FONT-SEMIBOLD and FONT-MEDIUM and font-[600] it updates the weight, even though I havne't customsed that in my css. Maybe because tailwind?
	// 	text = text.replace(/\*\*(.+?)\*\*/g, '<span class="font-medium">$1</span>');
	// 	text = text.replace(/__(.+?)__/g, '<span class="font-medium">$1</span>');

	// 	// Replace italic markings (surrounded by single * or _)
	// 	// Making sure we don't catch the bold markings by using negative lookaheads and lookbehinds
	// 	text = text.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
	// 	text = text.replace(/(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/g, '<em>$1</em>');

	// 	// const paragraphs = text.split('\n').map((paragraph) => {
	// 	// 	let formattedParagraph = paragraph;

	// 	// 	// Bold
	// 	// 	formattedParagraph = formattedParagraph.replace(
	// 	// 		/\*\*(\S.+?\S)\*\*/g,
	// 	// 		'<span class="custom-font-weight">$1</span>'
	// 	// 	);

	// 	// 	// Italic
	// 	// 	formattedParagraph = formattedParagraph.replace(/\*(\S.+?)\*/g, '<em>$1</em>');

	// 	// 	return formattedParagraph;
	// 	// });

	// 	// return paragraphs;
	// 	return text;
	// }
</script>

<div class="flex items-stretch bg-blue-400">
	<div class=" outline min-w-[20%]">
		<div class="clampText">
			{$currentLanguage === 'En' ? 'ARE WE' : 'SOMOS'}
		</div>
		<div class="ml-3">
			{$currentLanguage === 'En' ? 'A GOOD' : 'UN BUEN'}
		</div>
		<div class="ml-6">
			{$currentLanguage === 'En' ? 'MATCH?' : 'MATCH?'}
		</div>
	</div>
	{#each aboutData as i}
		<div class="  max-w-[700px] flex flex-col w-[90vw] mr-10">
			<div
				class="  text-xl p-5 max-w-fit translate-y-[50%] {i.color === 'Dark'
					? 'bg-primaryDark border-primary text-primary'
					: 'bg-primary border-primaryDark text-primaryDark'}  font-medium border rounded-2xl"
			>
				{$currentLanguage === 'En' ? i.nameEn : i.nameSp}
			</div>

			<div
				class="text-[22px] px-7 pt-[3.4rem] pb-[1rem] whitespace-pre-line border rounded-2xl flex flex-1 flex-col {i.color ===
				'Dark'
					? 'bg-primaryDark border-primary text-primary'
					: 'bg-primary border-primaryDark text-primaryDark'}"
			>
				{@html formatText($currentLanguage === 'En' ? i.textEn : i.textSp)}

				<!-- {#each formatText($currentLanguage === 'En' ? i.textEn : i.textSp) as paragraph}
				<p class="my-3">{@html paragraph}</p>
			{/each} -->
			</div>
		</div>
	{/each}
</div>

<style>
	.clampText {
		font-size: clamp(40%, 60%, 100%);
	}
</style>
