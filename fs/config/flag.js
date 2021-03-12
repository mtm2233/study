/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-12 11:23:43
 * @LastEditTime: 2021-03-12 11:23:56
 * @LastEditors: mTm
 */
// flag：写入的方式。
// @see https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_file_system_flags
// w  打开文件写入，默认值；
// w+ 打开文件进行读写，如果不存在则创建文件；
// r+ 打开文件进行读写，如果不存在那么抛出异常；
// r  打开文件读取，读取时的默认值；
// a  打开要写入的文件，将流放在文件末尾。如果不存在则创建文件；
// a+ 打开文件以进行读写，将流放在文件末尾。如果不存在则创建文件