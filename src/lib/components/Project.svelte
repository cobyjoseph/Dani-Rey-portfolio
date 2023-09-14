<script lang="ts">
	import { currentLanguage } from '$lib/stores/LanguageStore';

	export let projectsData;

	console.log(projectsData);
</script>

{#each projectsData as i}
	<div class="grid grid-cols-2 border border-primaryDark">
		<div class="flex flex-col">
			<!-- header -->
			<div>
				{$currentLanguage === 'En' ? i.titleEn : i.titleSp}

				<!-- tags -->
				<div>
					{#if $currentLanguage === 'En' && i.brandIdentity === true}
						Brand itentity
					{/if}

					{#if $currentLanguage === 'En' && i.brandDesignKit === true}
						Brand Design Kit
					{/if}
				</div>
			</div>

			<!-- description -->
			<div>
				{$currentLanguage === 'En' ? i.descriptionEn : i.descriptionSp}
			</div>
			<!-- link -->
			<div>
				{$currentLanguage === 'En' ? i.linkTitleEn : i.linkTitleSp}
			</div>
		</div>
		<div>
			<!-- photo -->
		</div>
	</div>
{/each}
