/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-01 15:02:06
 * @LastEditTime: 2021-03-01 15:06:38
 * @LastEditors: mTm
 */
export default function Jsx() {
    return (
        <div>
            <h1>JSX</h1>
            <Child />
        </div>
    )
}

function Child() {
    return (
        <p>Child</p>
    )
}