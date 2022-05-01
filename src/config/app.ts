export default {
  port: +process.env.PORT || 5000,
  databaseUrl: <string>process.env.MONGO_URL,
};
