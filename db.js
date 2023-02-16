import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  user: "postgres",
  password: "Epm50fUme8Ob12qz7uD6",
  host: "containers-us-west-182.railway.app",
  port: "5656",
  database: "railway",
});

export default pool;
