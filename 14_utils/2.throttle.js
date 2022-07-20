/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-10 20:11:42
 * @LastEditTime: 2022-07-20 22:34:50
 * @LastEditors: mTm
 */

function throttle(
  fn,
  interval = 0,
  options = { leading: true, trailing: false, callback: null }
) {
  let lastTime = 0;
  const { leading, trailing, callback } = options;
  let timer = null;

  function _throttle(...args) {
    return new Promise(resolve => {
      const nowTime = new Date().getTime();
      if (!leading && !lastTime) {
        lastTime = nowTime;
      }

      if (interval <= nowTime - lastTime) {
        const res = fn.apply(this, args);
        resolve(res);
        if (typeof callback === 'function') {
          callback(res)
        }
        lastTime = nowTime;
      }

      if (trailing) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        
        timer = setTimeout(() => {
          const res = fn.apply(this, args);
          resolve(res);
          if (typeof callback === 'function') {
            callback(res)
          }
          lastTime = 0;
        }, interval);
      }
    });
  }

  _throttle.cancel = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    lastTime = 0;
  };

  return _throttle;
}
