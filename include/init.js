const path = require("path");
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();

let dbpath = path.resolve(__dirname,"../_database/");
let dbfile = "cms.db";
let db = new sqlite3.Database(dbpath+"/"+dbfile);

let sqlpath = path.resolve(__dirname,"../sql/");
let sqlFile = "createChannel.sql";

db.serialize(function(){
    let sql = fs.readFileSync(sqlpath + "/" + sqlFile,'utf-8');
    console.log(sql);
    db.run(sql,function(err){
        console.log(err);
    })
});
db.close();