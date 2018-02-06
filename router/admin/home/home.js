/**
 * Created by fws on 2018/1/21.
 */

import express from "express";
import process from "process";
import pck from "../../../package.json";

let router = express.Router();

router.get("/",function(req,res){
    let protocol = req.protocol || '',
        hostname = req.hostname || '',
        host = protocol + "://" + hostname,
        headers = req.headers,
        userAgent = headers["user-agent"];
    let pageInitData = {
        title:"CMS首页",
        columnTitle:"管理中心",
        host:host,
        systemName:pck.name,
        systemAutor:pck.author,
        systemVersion:pck.version,
        serverVersion:"Node.js " + process.version,
        browser:userAgent,
        email:"fws407296762@qq.com",
        qq:"407296762"
    };
    res.render("index",pageInitData,function(err,html){
        if(err){
            throw err;
            return false;
        }
        res.send(html);
    });
});

export default router;