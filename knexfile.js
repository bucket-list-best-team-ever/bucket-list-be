module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/bucketlist.db3"
    },
    pool: {
        afterCreate: (connection, done) => {
          connection.run("PRAGMA foreign_keys = ON", done);
        }
      }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
