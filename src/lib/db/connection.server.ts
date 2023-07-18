import "dotenv/config";
import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import mysql from 'mysql2/promise';

// Create the connection
const poolConnection = mysql.createPool(process.env.MYSQL_URL as string);

export const drizzle_db = drizzle(poolConnection);

	// await migrate(drizzle_db, { migrationsFolder: 'drizzle' });