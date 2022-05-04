import {def} from './utils'
// 数组的响应式是改写的7个方法

//得到Array.prototype
const arrayPrototype = Array.prototype
// 以arrayPrototype为原型创建一个arrayMethods对象
export const arrayMethods = Object.create((arrayPrototype))
const methodsNeedChange = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
methodsNeedChange.forEach(methodsName => {
  const original = arrayPrototype[methodsName]
  const args = [...arguments]
  def(arrayMethods, methodsName, function () {
    const result = original.apply(this, arguments)
    const ob = this.__ob__
    let inserted = []
    switch (methodsName) {
      case 'push':
      case 'unshift':
        inserted = arguments
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) {
      ob.observerArray(inserted)
    }
    ob.dep.notify()
    console.log('啦啦啦')
    return result
  }, false)
})
// Object.set


