module.exports = Config = {
    dbHost: process.env.DBHOST || "localhost",
    dbUsername: process.env.DBUSER || "root",
    dbName: process.env.DBNAME || "backend_bts_test",
    dbPassword: process.env.DBPASS || "",
    dbDialect: process.env.DBMS || "mysql",
    port: process.env.PORT || "3001",
    usersTable: process.env.TBUSERS || "users",
    checklistTable: process.env.TBCHECKLIST || "checklist",
    tokenKey: process.env.TOKENKEY || "admin@1234"
}