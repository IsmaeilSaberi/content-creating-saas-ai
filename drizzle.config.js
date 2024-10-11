export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: process.env.NEON_DB_URL,
    connectionString: process.env.NEON_DB_CONNECTION_STRING,
  },
};
