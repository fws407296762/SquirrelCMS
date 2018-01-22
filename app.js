/**
 * Created by fws on 2018/1/21.
 */

import express from "express";
import path from "path";
import ejs from "ejs";
import templateRouter from "./router/template";
import adminRouter from "./router/admin";

let app = express();
app.engine("html",ejs.renderFile);
app.set("view engine","html");

//模板目录
let template = express();
// template.set("views",path.join(__dirname,"/template/views"));
// template.use(templateRouter);
// template.use(express.static(__dirname + "/template/static"));

//CMS后台目录
let admin = express();
adminRouter(admin);
admin.set("views",path.join(__dirname,"/admin/views"));
app.use("/admin/static",express.static(path.join(__dirname,"/admin/static")));


app.use("/",template);
app.use("/admin",admin);

app.listen(9090,function(){
    console.log("服务器开启")
});