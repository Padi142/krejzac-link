import type { Config } from 'drizzle-kit';
import 'dotenv/config';

if (!process.env.MYSQL_URL) {
	throw new Error('POSTGRES_URL is missing');
}

export default {
	schema: './src/lib/db/schema/*',
	out: './drizzle',
	driver: 'mysql2',
	dbCredentials: {
		connectionString: process.env.MYSQL_URL
	}
} satisfies Config;
