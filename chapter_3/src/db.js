import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync(":memory:");

// Execute sql statements form strings

db.exec(`
    CREATE TABLE user( 
       id INTEGER,
       username TEXT UNIQUE,
       password TEXT,
    )     
`);
db.exec(`
    CREATE TABLE todos(
       id INTEGER,
       user_id INTEGER,
       
       task TEXT,
       completed INTEGER
       comple
    )
`);
