<script lang="ts">
	import { currentLanguage } from '$lib/stores/LanguageStore';

	export let projectsData;

	console.log(projectsData);

	const tagMappings = {
		identidadMarca: {
			En: 'Brand Identity',
			Sp: 'Identidad de Marca'
		},
		kitIdentidad: {
			En: 'Brand Design Kit',
			Sp: 'Kit de Identidad de Marca'
		},
		disenoWeb: {
			En: 'Web Design',
			Sp: 'Diseño Web'
		},
		disenoPapeleria: {
			En: 'Stationary Design',
			Sp: 'Diseño de Papelería'
		},
		disenoRedes: {
			En: 'Social Media Design',
			Sp: 'Diseño de Redes Sociales'
		},
		estrategia: {
			En: 'Strategy',
			Sp: 'Estrategia'
		},
		disenoPackaging: {
			En: 'Packaging Design',
			Sp: 'Diseño de Packaging'
		},
		disenoProducto: {
			En: 'Product Design',
			Sp: 'Diseño de Producto'
		},
		disenoUxUi: {
			En: 'UX/UI',
			Sp: 'Diseño UX/UI'
		},
		cobranding: {
			En: 'Cobranding',
			Sp: 'Cobranding'
		}
	};
</script>

{#each projectsData as i}
	<div class="grid grid-cols-2 border border-primaryDark">
		<div class="flex flex-col p-7 justify-between min-h-[40rem]">
			<div>
				<!-- header -->

				<div class="text-2xl font-genSans font-medium">
					{$currentLanguage === 'En' ? i.titleEn : i.titleSp}
				</div>

				<!-- tags -->
				<div class="flex gap-3 text-primary text-xs  font-genSans">
					{#each Object.keys(tagMappings) as tagKey}
						{#if i[tagKey] === true}
							<div class=" min-w-fit bg-primaryDark py-[0.875rem] px-[1.125rem] rounded-[1.875rem]">
								{tagMappings[tagKey][$currentLanguage]}
							</div>
						{/if}
					{/each}
				</div>
			</div>

			<div>
				<!-- description -->
				<div>
					{$currentLanguage === 'En' ? i.descriptionEn : i.descriptionSp}
				</div>
				<!-- link -->
				<div>
					{$currentLanguage === 'En' ? i.linkTitleEn : i.linkTitleSp}
				</div>
			</div>
		</div>
		<div>
			<!-- photo -->
		</div>
	</div>
{/each}
