/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-08 22:45:02
 * @LastEditTime: 2021-03-08 22:50:29
 * @LastEditors: mTm
 */
const EventEmitter = require('events');
const emitter = new EventEmitter();

const listener = () => {
    console.log('listener');
}

emitter.on('click', (args) => {
    console.log(args);
})
emitter.once('click', listener)

emitter.emit('click', 1,2)

emitter.off('click', listener)

console.log(this);