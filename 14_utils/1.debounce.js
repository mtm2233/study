/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-10 12:11:34
 * @LastEditTime: 2022-04-10 16:34:05
 * @LastEditors: mTm
 */
function debounce(fn, delay = 0, options = {
  immediate: false,
  callback: null
}) {
  const { immediate, callback } = options
  let timer = null;
  let isExecuted = false;
  function _debounce(...args) {
    return new Promise(resolve => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (immediate && !isExecuted) {
        const res = fn.apply(this, args);
        resolve(res);
        if (typeof callback === 'function') {
          callback(res)
        }
        isExecuted = true;
        timer = setTimeout(() => {
          isExecuted = false;
        }, delay);
      } else {
        timer = setTimeout(() => {
          const res = fn.apply(this, args);
          resolve(res);
          if (typeof callback === 'function') {
            callback(res)
          }
          isExecuted = false;
        }, delay);
      }
    });
  }

  _debounce.cancel = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      isExecuted = false;
    }
  };

  return _debounce;
}
