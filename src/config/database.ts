export default () => {
  return {
    // host: process.env.DB_HOST || "45.77.246.147",
    // port: process.env.DB_PORT || 3306,
    // database: process.env.DB_DATABASE || "nest",
    // username: process.env.DB_USERNAME || "root",
    // password: process.env.DB_PASSWORD || "secret",
    // sync: true
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    sync: true
  };
};