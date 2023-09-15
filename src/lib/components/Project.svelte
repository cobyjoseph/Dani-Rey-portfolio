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
	<div class="grid grid-cols-2 border border-primaryDark rounded-3xl">
		<div class="flex flex-col p-7 justify-between h-[38rem]">
			<div>
				<!-- header -->

				<div class="text-5xl text- font-genSans font-medium">
					{$currentLanguage === 'En' ? i.titleEn : i.titleSp}
				</div>

				<!-- tags -->
				<div class="flex gap-3 text-primary text-[0.75rem] font-semibold mt-7 font-genSans">
					{#each Object.keys(tagMappings) as tagKey}
						{#if i[tagKey] === true}
							<div class=" min-w-fit bg-primaryDark py-[0.7rem] px-[1rem] rounded-[1.7rem]">
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
				<div class="flex gap-3 text-primary text-[0.75rem] font-semibold mt-7 font-genSans">
					<div class=" min-w-fit bg-primaryDark py-[0.7rem] px-[1rem] rounded-[1.7rem]">
						{$currentLanguage === 'En' ? i.linkTitleEn : i.linkTitleSp}
					</div>
				</div>
			</div>
		</div>
		<div>
			<!-- photo -->
		</div>
	</div>
{/each}
