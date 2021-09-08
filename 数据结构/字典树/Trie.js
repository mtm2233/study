/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-07-14 21:43:22
 * @LastEditTime: 2021-07-23 00:14:04
 * @LastEditors: mTm
 */
class TrieNode {
    data = null
    children = []
    isEndingChar = false
    constructor(data) {
        this.data = data
    }
}

class Trie {
    root = new TrieNode('/')
    // 将字符，数字，汉字转为下标
    charMap = new Map()
    // index
    charMapCount = -1

    charIndex(char, add = true) {
        const index = this.charMap.get(char)
        if (index !== undefined) {
            return index
        }
        if (add) {
            this.charMap.set(char, ++this.charMapCount)
            return this.charMapCount
        }
        return -1
    }
    // 在Trie树中查找一个字符串
    insert(str) {
        let p = this.root
        const len = str.length
        for(let i = 0; i < len; ++i) {
            const index = this.charIndex(str[i])
            if (!p.children[index]) {
                p.children[index] = new TrieNode(str[i])
            }
            p = p.children[index]
        }
        p.isEndingChar = true
    }

    // 在Trie树中插入一个字符串
    find(str) {
        const len = str.length
        let p = this.root
        for(let i = 0; i < len; ++i) {
            const index = this.charIndex(str[i])
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
            const index = this.charIndex(str[i], false)
            if (index === -1 || !p.children[index]) {
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
            const index = this.charIndex(charNode.data)
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
trie.insert('125461')
const strList = trie.search('1')
const result = trie.find('hel')
console.log(strList);
console.log(result);
// console.log(trie.charMap);
