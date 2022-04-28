import { def } from './utils'
// 数组的响应式是改写的7个方法

//得到Array.prototype
const arrayPrototype = Array.prototype
// 以arrayPrototype为原型创建一个arrayMethods对象
export const  arrayMethods = Object.create((arrayPrototype))
const methodsNeedChange =[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
methodsNeedChange.forEach(methodsName=>{
  const  original = arrayPrototype[methodsName]
  def(arrayMethods,methodsName,function (){
    console.log('1212')
  },false)
})
// Object.set
console.log(arrayMethods)


