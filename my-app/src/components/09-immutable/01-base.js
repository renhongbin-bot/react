import React from 'react'

export default function App() {
  const obj1 = {
    name: 'rhb',
    arr: [1, 2, 3],
    address: undefined,
    date: new Date()
  }
  console.log(obj1)
  // const obj2 = obj1
  // obj2.name = 'cht'
  // console.log(obj1.name, obj2.name)

  // 浅复制,只复制一层
  // const obj3 = {...obj1}
  // obj3.name = 'aaa'
  // obj3.arr.push(4)
  // console.log(obj1.name, obj3.name, obj1.arr, obj3.arr)

  // 深复制 1.JSON.parse(JSON.stringify()) 缺点:对象中不能有undefined, 在解析时会删除值为undefined的字段
  // const obj4 = JSON.parse(JSON.stringify(obj1))
  // obj4.name = 'bbb'
  // obj4.arr.push(4)
  // console.log(obj4)
  // console.log(obj1.name, obj4.name, obj1.arr, obj4.arr)

  // 深复制 2.递归方法深复制 -层层复制 缺点: 性能差,占用内存, 需要判断的类型很多
  function isObject(obj) {
    return typeof obj === 'object' && obj != null
  }
  function deepClone(souce, hash = new Map()) {
    // 如果是基本类型直接返回
    if (!isObject(souce)) return souce
    // 查哈希表,解决循环引用和引用丢失
    if (hash.has(souce)) return hash.get(souce)
    const target = Array.isArray(souce) ? [] : {}
    // 设置hash的值
    hash.set(souce, target)
    // Reflect.ownKeys 获取对象自身属性名
    Reflect.ownKeys(souce).forEach(key => {
      if (isObject(souce[key])) {
        target[key] = deepClone(souce[key], hash)
      } else {
        target[key] = souce[key]
      }
    })
    return target
  }
  const obj5 = deepClone(obj1)
  obj5.name = 'deepClone'
  obj5.arr.push(5)
  console.log(obj5)

  return <div>123</div>
}
