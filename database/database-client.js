import "dotenv/config";

import pg from 'pg';

// Create connexion client to Postgres database
const client = new pg.Client(process.env.DATABASE_URL);

// Connect it
client.connect();

// Export the client as default
export default client;  