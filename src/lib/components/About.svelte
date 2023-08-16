<script lang="ts">
	import { currentLanguage } from '$lib/stores/LanguageStore';

	export let aboutData;

	function formatText(text) {
		// Bold IF I USE FONT-SEMIBOLD and FONT-MEDIUM and font-[600] it updates the weight, even though I havne't customsed that in my css. Maybe because tailwind?
		text = text.replace(/\*\*(.+?)\*\*/g, '<span class="font-medium">$1</span>');
		text = text.replace(/__(.+?)__/g, '<span class="font-medium">$1</span>');

		// Replace italic markings (surrounded by single * or _)
		// Making sure we don't catch the bold markings by using negative lookaheads and lookbehinds
		text = text.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
		text = text.replace(/(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/g, '<em>$1</em>');

		// const paragraphs = text.split('\n').map((paragraph) => {
		// 	let formattedParagraph = paragraph;

		// 	// Bold
		// 	formattedParagraph = formattedParagraph.replace(
		// 		/\*\*(\S.+?\S)\*\*/g,
		// 		'<span class="custom-font-weight">$1</span>'
		// 	);

		// 	// Italic
		// 	formattedParagraph = formattedParagraph.replace(/\*(\S.+?)\*/g, '<em>$1</em>');

		// 	return formattedParagraph;
		// });

		// return paragraphs;
		return text;
	}
</script>

{#each aboutData as i}
	<div class=" test max-w-[700px] flex flex-col">
		<div
			class="text-xl p-5 max-w-fit translate-y-[50%] bg-primary font-medium border border-primaryDark rounded-2xl"
		>
			{$currentLanguage === 'En' ? i.nameEn : i.nameSp}
		</div>

		<div
			class="text-[22px] px-7 py-[5rem] justify-center whitespace-pre-line border border-primaryDark rounded-2xl"
		>
			{@html formatText($currentLanguage === 'En' ? i.textEn : i.textSp)}

			<!-- {#each formatText($currentLanguage === 'En' ? i.textEn : i.textSp) as paragraph}
				<p class="my-3">{@html paragraph}</p>
			{/each} -->
		</div>
	</div>
{/each}
