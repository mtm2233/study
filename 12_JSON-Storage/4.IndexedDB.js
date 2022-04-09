/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-09 22:51:49
 * @LastEditTime: 2022-04-09 23:38:27
 * @LastEditors: mTm
 */
let db = null;

function setDb(event) {
  db = event.target.result;
  return;
  // 通过db获取对应存储的事务 db.transaction(存储名称, 可写操作)；
  const transaction = db.transaction('user', 'readwrite');
  // 通过事务获取对应的存储对象 transaction.objectStore(存储名称)；
  const store = transaction.objectStore('user');
  console.log('db', db);
  console.log('transaction', transaction);
  console.log('store', store);
}

function init() {
  // 数据库的open方法会得到一个IDBOpenDBRequest类型
  const dbRequest = indexedDB.open('mtm', 1);
  console.log(dbRequest, 'dbRequest');

  dbRequest.onerror = function (err) {
    console.log('数据库连接失败', err);
  };

  dbRequest.onsuccess = function (event) {
    console.log('数据库连接成功');
    setDb(event);
  };

  // version发生变化并且高于之前版本时回调
  dbRequest.onupgradeneeded = function (event) {
    setDb(event);
    console.log('version发生变化');
    // 创建具体的存储对象：db.createObjectStore(存储对象名称, { keypath: 存储的主键 })
    db.createObjectStore('user', {
      keyPath: 'id',
    });
  };
}

init();

let id = 1;
const indexedDBBtns = document.querySelectorAll('.indexedDB-btn');
for (let i = 0; i < indexedDBBtns.length; i++) {
  indexedDBBtns[i].onclick = function () {
    const transaction = db.transaction('user', 'readwrite');
    const store = transaction.objectStore('user');
    const request = store.openCursor();
    switch (i) {
      case 0:
        console.log('新增');
        store.add({ id: id++, name: 'test' });
        break;
      case 1:
        console.log('删除');
        request.onsuccess = function (event) {
          const cursor = event.target.result;
          console.log(cursor);
          if (cursor) {
            if (cursor.value.id === 1) {
              cursor.delete()
            } else {
              cursor.continue();
            }
          }
        };
        break;
      case 2:
        console.log('修改');
        request.onsuccess = function (event) {
          const cursor = event.target.result;
          console.log(cursor);
          if (cursor) {
            if (cursor.value.id === 1) {
              cursor.update({
                ...cursor.value,
                name: 'update'
              })
            } else {
              cursor.continue();
            }
          }
        };
        break;
      case 3:
        console.log('查询');
        // 单个
        const request1 = store.get(1);
        request1.onsuccess = function (event) {
          console.log(event.target.result);
        }
        // 多个查询
        request.onsuccess = function (event) {
          const cursor = event.target.result;
          console.log(cursor);
          if (cursor) {
            if (cursor.value.id < 3) {
              console.log(cursor.value);
              cursor.continue();
            } else {
              console.log('查询完毕');
            }
          }
        };
        break;
    }
  };
}
