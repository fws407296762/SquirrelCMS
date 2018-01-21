/**
 * Created by fws on 2018/1/21.
 */

function home(router){
    router.get("/",function(req,res){
        res.send("asaas");
    })
}

module.exports = home;