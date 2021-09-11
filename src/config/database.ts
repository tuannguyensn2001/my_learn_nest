export default () => {


  return {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_DATABASE || "nest",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    sync: true
  };
}