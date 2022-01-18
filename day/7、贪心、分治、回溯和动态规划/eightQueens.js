/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-14 13:56:47
 * @LastEditTime: 2022-01-16 20:36:24
 * @LastEditors: mTm
 */
function isOk(data, row, column) {
  let k = 0;
  while (++k <= row) {
    if (data[row - k][column]) {
      return false;
    } else if (column >= k && data[row - k][column - k]) {
      return false;
    } else if (column + k < 8 && data[row - k][column + k]) {
      return false;
    }
  }
  return true;
}

function eightQueens_c(data, row, count) {
  if (row === 8) {
    ++count.value;
    return;
  }

  for (let column = 0; column < 8; column++) {
    if (isOk(data, row, column)) {
      data[row] = new Array(8).fill(0);
      data[row][column] = 1;

      eightQueens_c(data, row + 1, count);
    }
  }
}

function eightQueens() {
  const data = new Array(8).fill(0).map(() => new Array(8).fill(0));
  const count = {
    value: 0,
  };
  eightQueens_c(data, 0, count);
  return count.value;
}

// function isOK(result, row, column) {
//   let leftup = column - 1;
//   let rightup = column + 1;
//   for (let i = row - 1; i >= 0; --i) {
//     if (result[i] === column) {
//       return false;
//     }
//     if (leftup >= 0) {
//       if (result[i] === leftup) {
//         return false;
//       }
//     }
//     if (rightup < 8) {
//       if (result[i] === rightup) {
//         return false;
//       }
//     }
//     --leftup;
//     ++rightup;
//   }
//   return true;
// }

// function eightQueens_c(result, row, count) {
//   if (row === 8) {
//     ++count.value
//     return;
//   }
//   for (let column = 0; column < 8; ++column) {
//     if (isOK(result, row, column)) {
//       result[row] = column;
//       eightQueens_c(result, row + 1, count);
//     }
//   }
// }

// function eightQueens() {
//   const result = new Array();
//   const count = {
//     value: 0
//   }
//   eightQueens_c(result, 0, count);
//   console.log(count.value);
// }

module.exports = eightQueens;
