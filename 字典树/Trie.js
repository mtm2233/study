/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-07-14 21:43:22
 * @LastEditTime: 2021-07-14 22:28:43
 * @LastEditors: mTm
 */

const MAX_CHAR = 26
const A = 'a'.charCodeAt()

// 假设只包含a-z
class TrieNode {
    children = new Array(MAX_CHAR)
    isEndingChar = false
    data = null
    constructor(data) {
        this.data = data
    }
}

class Trie {
    // 存储无意义字符
    root = new TrieNode('/')
    // 往Trie树中插入一个字符串
    insert(str) {
        const len = str.length
        let p = this.root
        for(let i = 0; i < len; ++i) {
            const index = str[i].charCodeAt() - A
            if (!p.children[index]) {
                p.children[index] = new TrieNode(str[i])
            }
            p = p.children[index]
        }
        p.isEndingChar = true
    }

    // 在Trie树中查找一个字符串
    find(str) {
        const len = str.length
        let p = this.root
        for(let i = 0; i < len; ++i) {
            const index = str[i].charCodeAt() - A
            if (!p.children[index]) {
                return false
            }
            p = p.children[index]
        }
        return p.isEndingChar
    }

    // 查找所有符合前缀的字符串
    search(str) {
        const strList = []
        const len = str.length
        let p = this.root
        for(let i = 0; i < len; ++i) { 
            const index = str[i].charCodeAt() - A
            if (!p.children[index]) {
                return false
            }
            p = p.children[index]
        }
        // 判断前缀是不是一个字符
        if (p.isEndingChar) {
            strList.push(str)
        }
        this.search_c(p, strList, str)
        return strList
    }

    // 继续搜索
    search_c(p, strList, str) {
        p.children.filter(Boolean).forEach(charNode => {
            const newStr = str + charNode.data
            const index = charNode.data.charCodeAt() - A
            if (charNode.isEndingChar) {
                strList.push(newStr)
            }
            this.search_c(p.children[index], strList, newStr)
        })
    }
}

const trie = new Trie()
trie.insert('hello')
trie.insert('helhel')
trie.insert('hel')
trie.insert('helaaa')
const strList = trie.search('hel')
const result = trie.find('helaaa')
console.log(strList);
console.log(result);
