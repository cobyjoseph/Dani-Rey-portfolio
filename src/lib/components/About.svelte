<script lang="ts">
	export let aboutData;
</script>

{#each aboutData as i}
	<div class=" border border-primaryDark max-w-[744px] outline">
		<div class="bold text-xl">
			{i.nameEn}
		</div>

		{i.textEn}
	</div>
{/each}
