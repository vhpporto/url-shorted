import pkg from "pg";
const { Client } = pkg;

const query = async (queryObject) => {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });
  try {
    await client.connect();
    const res = await client.query(queryObject);

    return res;
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
};

export default {
  query,
};
