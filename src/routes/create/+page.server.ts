import { get } from 'svelte/store';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { drizzle_db } from '$lib/db/connection.server';
import { links } from '$lib/db/schema/link';
import { env } from '$env/dynamic/private';

export const load = (async ({ url }) => {
	return {
		shortLink: createShortLink()
	};
}) satisfies PageServerLoad;

export const actions = {
	create_link: async ({ request }) => {
		const data = await request.formData();
		const longLink = data.get('longLink')?.toString().trim();
		const shortLink = data.get('shortLink')?.toString().trim();
		const password = data.get('password')?.toString().trim();

		if(password != env.ADMINPASSWORD){
			throw redirect(303, "https://media.discordapp.net/attachments/819665719615815734/1038510113511706687/caption-1.gif");
		}

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
