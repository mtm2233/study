/*
 * @Description: 杨辉三角最短路径
 * @Author: mTm
 * @Date: 2021-08-25 09:17:13
 * @LastEditTime: 2021-08-25 11:06:19
 * @LastEditors: mTm
 */
class TriangleShortestPath {
  data = [];
  constructor(data = []) {
    this.data = data;
  }
  shortestPath() {
    const data = this.data;
    const len = data.length
    const pathData = new Array(len)
      .fill(0)
      .map(() => new Array(data[len - 1].length));
    // 哨兵
    pathData[0][0] = {
        path: [data[0][0]],
        sum: data[0][0]
    };
    for (let i = 1; i < len; i++) {
      for (let j = 0; j < data[i].length; j++) {
        let min;
        // 左侧不存在
        if (!pathData[i - 1][j]) {
            min = pathData[i - 1][j - 1]
        // 右侧不存在
        } else if (!pathData[i - 1][j - 1]) {
            min = pathData[i - 1][j]
        // 左侧小于等于右侧
        } else if (pathData[i - 1][j - 1].sum <= pathData[i - 1][j].sum) {
            min = pathData[i - 1][j - 1]
        } else {
            min = pathData[i - 1][j]
        }
        pathData[i][j] = {
            path: [...min.path, data[i][j]],
            sum: min.sum + data[i][j]
        }
      }
    }

    let min = pathData[len - 1][0];
    // 输出最短路径
    for(let j = 0; j < pathData[len - 1].length; j++) {
        if (min.sum > pathData[len - 1][j].sum) {
            min = pathData[len - 1][j]
        }
    }
    console.log(`最短路径为：${min.path.join('->')}, 长度为：${min.sum}`);
  }
}

const triangleShortestPath = new TriangleShortestPath([
  [5],
  [7, 8],
  [2, 3, 4],
  [4, 9, 6, 1],
  [2, 7, 9, 4, 5],
]);

triangleShortestPath.shortestPath();
