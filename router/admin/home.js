/**
 * Created by fws on 2018/1/21.
 */

import express from "express";
import url from "url";
let router = express.Router();

router.get("/",function(req,res){
    let protocol = req.protocol || '',
        hostname = req.hostname || '',
        host = protocol + "://" + hostname;
    let pageInitData = {
        title:"CMS首页",
        columnTitle:"管理中心",
        host:host
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