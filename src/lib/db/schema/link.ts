import { int, mysqlTable, text, datetime, serial } from 'drizzle-orm/mysql-core';
import { sql, type InferModel } from 'drizzle-orm';

export const links = mysqlTable('links', {
	id: serial('id').primaryKey(),
	link: text('link').notNull().default(''),
	shortLink: text('short_link').notNull().default(''),
	clicks: int('clicks').notNull().default(0),
	addedOn: datetime('added_on')
		.notNull()
		.default(sql`now()`),
	lastClicked: datetime('last_clicked')
});

export type Link = InferModel<typeof links>;
