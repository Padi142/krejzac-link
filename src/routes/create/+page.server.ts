import { get } from 'svelte/store';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { drizzle_db } from '$lib/db/connection.server';
import { links } from '$lib/db/schema/link';

export const load = (async ({ url }) => {
	return {
		shortLink: createShortLink()
	};
}) satisfies PageServerLoad;

export const actions = {
	create_link: async ({ params, request }) => {
		const data = await request.formData();
		const longLink = data.get('longLink')?.toString().trim();
		const shortLink = data.get('shortLink')?.toString().trim();

		await drizzle_db.insert(links).values({
			link: longLink,
			shortLink: shortLink
		});
	}
};

const createShortLink = (): string => {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let result = '';

	for (let i = 0; i < 5; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}

	return result;
};
