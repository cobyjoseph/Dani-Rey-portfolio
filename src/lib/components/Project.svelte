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
					{#if $currentLanguage === 'En'}
						{#if i.brandIdentity === true}
							Brand itentity
						{/if}

						{#if i.brandDesignKit === true}
							Brand Design Kit
						{/if}

						{#if i.webDesign === true}
							Web Design
						{/if}

						{#if i.stationaryDesign === true}
							Stationary Design
						{/if}

						{#if i.socialMediaDesign === true}
							Social Media Design
						{/if}

						{#if i.strategy === true}
							Strategy
						{/if}

						{#if i.packagingDesign === true}
							Packaging Design
						{/if}

						{#if i.productDesign === true}
							Product Design
						{/if}

						{#if i.uxUi === true}
							UX/UI
						{/if}

						{#if i.cobranding === true}
							Cobranding
						{/if}
					{:else}
						{#if i.identidadMarca === true}
							Identidad de Marca
						{/if}

						{#if i.kitIdentidad === true}
							Kit de Identidad de Marca
						{/if}

						{#if i.disenoWeb === true}
							Diseño Web
						{/if}

						{#if i.disenoPapeleria === true}
							Diseño de Papelería
						{/if}

						{#if i.disenoRedes === true}
							Diseño de Redes Sociales
						{/if}

						{#if i.estrategia === true}
							Estrategia
						{/if}

						{#if i.disenoPackaging === true}
							Diseño de Packaging
						{/if}

						{#if i.disenoProducto === true}
							Diseño de Producto
						{/if}

						{#if i.disenoUxUi === true}
							Diseño UX/UI
						{/if}

						{#if i.cobranding === true}
							Cobranding
						{/if}
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
