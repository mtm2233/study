/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-08 10:58:06
 * @LastEditTime: 2021-03-08 13:17:05
 * @LastEditors: mTm
 */
const fs = require('fs');
const path = require('path');

interface Params {
    oldFile: string;
    newFile: string;
    fileType: string;
    deep: boolean;
}

class CopyFile {
    private fileParams: Params;
    constructor(fileParams: Params) {
        this.fileParams = fileParams;
        this.init();
    }
    init() {
        const { oldFile, newFile } = this.fileParams;
        this.fileParams = {
            ...this.fileParams,
            oldFile: path.resolve(oldFile),
            newFile: path.resolve(newFile)
        }
    }

    // 文件夹是否存在
    isExist(url: string): boolean {
        return fs.existsSync(url);
    }

    // 拷贝文件
    copyFile(oldUrl: string, newFile: string) {
        if(this.isExist(oldUrl) && !this.isExist(newFile)) {
            console.log('拷贝文件：', path.basename(oldUrl));
            fs.copyFileSync(oldUrl, newFile);
        }
    }

    // 创建文件夹
    mkdir(url: string) {
        if (!this.isExist(url)) {
            console.log('创建文件夹：', path.basename(url));
            fs.mkdirSync(url)
        }
    }

    // 是否为文件夹
    isDir(url: string) {
        return fs.statSync(url).isDirectory()
    }

    cycle(
        oldFile = this.fileParams.oldFile,
        newFile = this.fileParams.newFile,
    ) {
        this.mkdir(newFile);

        if (this.isExist(oldFile)) {
            fs.readdirSync(oldFile).forEach((file: string) => {
                const oldFileR = path.resolve(oldFile, file);
                const newFileR = path.resolve(newFile, file);
                if(this.isDir(oldFileR) && this.fileParams.deep) { 
                    this.cycle(oldFileR, newFileR)
                } else if (path.extname(file) === this.fileParams.fileType) {
                    this.copyFile(oldFileR, newFileR)
                }
            })
        }
    }
}


const copyFile = new CopyFile({
    oldFile: './old',
    newFile: './new',
    fileType: '.txt',
    deep: true
})
 
copyFile.cycle();