import { drizzle } from 'drizzle-orm/postgres-js';

import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';



export const client = postgres(DATABASE_URL);
export const drizzle_db = drizzle(client);

	// await migrate(drizzle_db, { migrationsFolder: 'drizzle' });