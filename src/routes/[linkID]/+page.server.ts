import { drizzle_db } from '$lib/db/connection.server';
import { links, type Link } from '$lib/db/schema/link';
import { eq, sql } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ params   }) => {
	const linkId = params.linkID;

	const link = await getLongLink(linkId);

	if (link == null) {
		throw redirect(302, '/');
	}

	await addClickCount(link)
    throw redirect(303, link.link);
}) satisfies PageServerLoad;

const getLongLink = async (linkId: string): Promise<Link | null> => {
	let query = await drizzle_db.select().from(links).where(eq(links.shortLink, linkId));

	return query[0];
};

const addClickCount = async (link: Link) => {
	await drizzle_db.update(links)
	.set({
		clicks:link.clicks +1, lastClicked: sql`now()`,
	}).where(eq(links.id, link.id))

};


