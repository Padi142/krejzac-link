import { timestamp, text, integer, pgTable, serial } from 'drizzle-orm/pg-core';
import { sql, type InferModel } from 'drizzle-orm';

export const links = pgTable('links', {
	id: serial('id').primaryKey(),
	link: text('link').notNull().default(''),
	shortLink: text('short_link').notNull().default(''),
	clicks: integer('clicks').notNull().default(0),
	addedOn: timestamp('added_on')
		.notNull()
		.default(sql`now()`),
	lastClicked: timestamp('last_clicked')
});

export type Link = InferModel<typeof links>;
