/**
 * Created by fws on 2018/1/21.
 */

const express = require("express");
const path = require("path");
const ejs = require("ejs");
const templateRouter = require("./router/template");
const adminRouter = require("./router/admin");

let app = express();
app.engine("html",ejs.renderFile);
app.set("views engine",".html");

//模板目录
let template = express();
// template.set("views",path.join(__dirname,"/template/views"));
// template.use(templateRouter);
// template.use(express.static(__dirname + "/template/static"));

//CMS后台目录
let admin = express();
admin.set("views",path.join(__dirname,"/admin/views"));
admin.use(adminRouter);
admin.use(express.static(__dirname + "/admin/static"));

app.use("/",template);
app.use("/admin",admin);

app.listen(9090);