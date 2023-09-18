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

{#each projectsData as i, index}
	<div
		class="grid grid-cols-2 h-[90lvh] h-[90vh] overflow-hidden max-h-[50rem] mt-20"
		style="position: sticky; top: {index * 110 + 30}px;"
	>
		<div
			class="flex flex-col p-8 2xl:p-10 justify-between border border-t-primaryDark border-b-primaryDark border-l-primaryDark bg-primary rounded-l-2xl"
		>
			<div>
				<!-- header -->

				<div class="text-3xl 2xl:text-6xl font-genSans font-medium">
					{$currentLanguage === 'En' ? i.titleEn : i.titleSp}
				</div>

				<!-- tags -->
				<div
					class="flex gap-3 text-primary 2xl:text-[0.75rem] text-[0.5rem] 2xl:mt-8 mt-6 font-semibold font-genSans"
				>
					{#each Object.keys(tagMappings) as tagKey}
						{#if i[tagKey] === true}
							<div class=" min-w-fit bg-primaryDark py-[0.7rem] px-[1rem] rounded-[1.7rem]">
								{tagMappings[tagKey][$currentLanguage]}
							</div>
						{/if}
					{/each}
				</div>
			</div>

			<div class="">
				<!-- description -->

				<div class=" text-base 2xl:text-xl">
					{$currentLanguage === 'En' ? i.descriptionEn : i.descriptionSp}
				</div>
				<!-- link -->
				<div
					class="flex gap-3 text-primary 2xl:text-[0.75rem] text-[0.5rem] font-semibold 2xl:mt-8 mt-6 font-genSans"
				>
					<div class=" min-w-fit bg-primaryDark py-[0.7rem] px-[1rem] rounded-[1.7rem]">
						{$currentLanguage === 'En' ? i.linkTitleEn : i.linkTitleSp}
					</div>
				</div>
			</div>
		</div>
		<div class="relative">
			<!-- Use 'absolute' positioning and set all coordinates to '0' to make it full-width and full-height -->
			<div class="absolute inset-0">
				{#if i.photo}
					<img src={i.photo} alt="Project" class="object-cover w-full h-full rounded-r-2xl" />
				{/if}
			</div>
		</div>
	</div>
{/each}
