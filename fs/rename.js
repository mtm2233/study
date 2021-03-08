/*
 * @Description: 文件重命名
 * @Author: mTm
 * @Date: 2021-03-08 10:40:09
 * @LastEditTime: 2021-03-08 10:46:09
 * @LastEditors: mTm
 */
const { fs } = require('./config');
const file = './mkdir';
const renameFile = './mkdir1'

if (fs.existsSync(file)) {
    fs.rename(file, renameFile, err => {
        err && console.log(err);
    })
}


file.isDirectory