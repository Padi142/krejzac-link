<script lang="ts">
	import type { PageData } from './$types';

	let longLink: string = '';

	let password: string = '';

	export let data: PageData;
</script>

<div class="h-full">
	<form
		method="POST"
		action="?/create_link"
		class="flex flex-col gap-4 justify-center items-center mx-6 h-screen"
		>
		<div class="w-96">
			<h class="text-gray-400 text-left w-full">Link you want shortened</h>
			<input
			type="text"
			placeholder=""
			class="input input-bordered w-full "
			bind:value={longLink}
			name="longLink"
			/>
		</div>
		<div class="w-96">

			<div class="flex w-full items-center h-full">
				<h class="text-xl text-white">link.krejzac.cz/ </h>
				<div class="flex flex-col justify-center items-center ml-2">
				<h class="text-gray-400 text-left w-full">Short link url</h>
			<input
			type="text"
			placeholder=""
			class="input input-bordered mb-2 w-full"
			bind:value={data.shortLink}
			name="shortLink"
			/>
		</div>
		</div>
	</div>

			<input
				type="text"
				placeholder="Password"
				class="input input-bordered my-2 w-sm"
				bind:value={password}
				name="password"
			/>

			{#if longLink != ''}
				<button class="btn btn-accent my-8">Create</button>
			{:else}
				<button class="btn btn-neutral btn-disabled my-8">Create</button>
			{/if}
	</form>

</div>
