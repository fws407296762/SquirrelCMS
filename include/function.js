/**
 * Created by fws on 2018/1/15.
 */

const path = require("path");
const fs = require("fs");

//不包含父级的目录结构
async function getChildDirTree(dirpath){
    dirpath = dirpath || path.join(__dirname,"./");
    let pathval = [];
    let pathobj;
    try{
        let stat = await getFsStat(dirpath);
        let isDirectory = stat.isDirectory();
        let isFile = stat.isFile();
        if(isFile){
            return false;
        }else if(isDirectory){
            let files = await getFiles(dirpath);
            if(files.length){
                for(let i = 0;i<files.length;i++){
                    /**
                     * 这里还是个坑，需要优化
                     * 优化思路是在递归的时候检测文件类型，而不是在 for 循环里面检测文件类型，这样有一个异步的过程，很慢
                     */
                    let filestat = await getFsStat(path.join(dirpath,files[i]));
                    let isfile = filestat.isFile();
                    let file = {
                        path:files[i],
                        type: isfile ? 'file' : 'directory',
                        atime:stat.atime,
                        mtime:stat.mtime,
                        ctime:stat.ctime,
                        birthtime:stat.birthtime
                    };
                    if(isfile){
                        file.filetype = path.extname(files[i]);
                    }
                    pathobj = await getChildDirTree(path.join(dirpath,files[i]));
                    if(pathobj.length){
                        file.children = pathobj;
                    }
                    pathval.push(file)
                }
            }
            return pathval;
        }

    }catch(e){
        console.log(e);
        throw e;
    }
}

//包含父级的目录结构

async function getDirTree(dirpath){
    let dirTree = {
        path:dirpath
    };
    let childrenDirTree = await getChildDirTree(dirpath);
    if(childrenDirTree.length){
        dirTree.children = childrenDirTree;
    }
    return dirTree;
}

getDirTree("E:\\CODE\\ASP").then(function(res){
    console.log(JSON.stringify(res,null,2));
});

function getFsStat(dirpath){
    return new Promise(function(resolve,reject){
        fs.stat(dirpath,function(err,stats){
            if(err){
                reject(err);
                return false;
            }
            resolve(stats);
        })
    })
}

function getFiles(dirpath){
    return new Promise(function(resolve,reject){
        fs.readdir(dirpath,function(err,files){
            if(err){
                reject(err);
                return false;
            }
            resolve(files)
        })
    })
}
