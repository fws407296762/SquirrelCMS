/**
 * Created by fws on 2018/1/20.
 */
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

let dbpath = path.resolve(__dirname,"../_database/");
let dbfile = "cms.db";
let db = new sqlite3.Database(dbpath+"/"+dbfile);

db.serialize(function(){

});
db.close();