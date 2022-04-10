/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-10 12:12:04
 * @LastEditTime: 2022-04-10 17:25:35
 * @LastEditors: mTm
 */
function typeOf(obj, type) {
  const toString = Object.prototype.toString;
  const result = toString.call(obj).slice(8, -1).toLowerCase();
  if (type) {
    const __type = toString.call(type).slice(8, -1).toLowerCase();
    if (__type === 'string') {
      return result.search(type.toLowerCase()) !== -1;
    }
    if (__type === 'array' && type.length) {
      return type.some(i => result.search(i.toLowerCase()) !== -1);
    }
  }
  return result;
}

function deepClone(o, objMap = new Map()) {
  let _o = objMap.get(o) || null;
  if (_o) {
    return _o;
  }

  const type = typeOf(o);

  if (['object', 'array'].includes(type)) {
    _o = type === 'object' ? {} : [];
    objMap.set(o, _o);
    [...Object.keys(o), ...Object.getOwnPropertySymbols(o)].forEach(key => {
      _o[key] = deepClone(o[key], objMap);
    });
  } else if (type === 'map') {
    _o = new Map();
    objMap.set(o, _o);
    for (const [key, value] of o) {
      _o.set(key, deepClone(value, objMap));
    }
  } else if (type === 'set') {
    _o = new Set();
    objMap.set(o, _o);
    o.forEach(item => {
      _o.add(deepClone(item, objMap));
    });
  }
  return _o || o;
}
