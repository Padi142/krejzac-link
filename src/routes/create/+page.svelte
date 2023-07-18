<script lang="ts">
	import type { PageData } from './$types';

	let longLink: string = '';
	export let data: PageData;
</script>

<div class=" hero flex flex-col gap-4 justify-center items-center min-w-full min-h-full">
	<form
		method="POST"
		action="?/create_link"
		class="flex flex-col gap-4 justify-center items-center mx-6 min-h-full"
	>
		<div class="flex flex-col border-opacity-50 my-8 desktop w-full max-w-md">
			<input
				type="text"
				placeholder="Long link"
				class="input input-bordered"
				bind:value={longLink}
				name="longLink"
			/>

			<input
				type="text"
				placeholder="Short link"
				class="input input-bordered my-2 w-full max-w-md"
				bind:value={data.shortLink}
				name="shortLink"
			/>

			{#if longLink != ''}
				<button class="btn btn-accent my-8">Create</button>
			{:else}
				<button class="btn btn-neutral btn-disabled my-8">Create</button>
			{/if}
		</div>
	</form>
</div>
