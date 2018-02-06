/**
 * Created by fws on 2018/2/6.
 */
import express from "express";

let router = express.Router();

router.get("/list",function(req,res){
    let pageInitData = {
        title:"内容列表",
        columnTitle:"内容列表"
    }
    res.render("content_list",pageInitData,function(err,html){
        if(err){
            throw err;
            return false;
        }
        res.send(html);
    })
});

export default router;