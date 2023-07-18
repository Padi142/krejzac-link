import { drizzle_db } from '$lib/db/connection.server';
import { links, type Link } from '$lib/db/schema/link';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ params   }) => {
	const linkId = params.linkID;

	const link = await getLongLink(linkId);

	if (link == null) {
		throw redirect(302, '/');
	}

    throw redirect(303, link.link);
}) satisfies PageServerLoad;

const getLongLink = async (linkId: string): Promise<Link | null> => {
	let query = await drizzle_db.select().from(links).where(eq(links.shortLink, linkId));

	return query[0];
};
