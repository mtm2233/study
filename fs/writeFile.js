/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-08 10:24:11
 * @LastEditTime: 2021-03-08 10:30:39
 * @LastEditors: mTm
 */
const {fs, url} = require('./config');
const content = "abcd我"

// flag：写入的方式。
// @see https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_file_system_flags
// w  打开文件写入，默认值；
// w+ 打开文件进行读写，如果不存在则创建文件；
// r+ 打开文件进行读写，如果不存在那么抛出异常；
// r  打开文件读取，读取时的默认值；
// a  打开要写入的文件，将流放在文件末尾。如果不存在则创建文件；
// a+ 打开文件以进行读写，将流放在文件末尾。如果不存在则创建文件


// pencoding：字符的编码；
// @see https://www.jianshu.com/p/899e749be47c
const writeConfig = {
    flag: 'a+'
}

fs.writeFile(url, content, writeConfig, err => {
    if (!err) {
        fs.readFile(url, {encoding: 'utf-8'}, (err, content) => {
            console.log(content);
        })
    }
})