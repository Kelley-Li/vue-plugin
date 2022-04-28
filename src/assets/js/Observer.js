import { def } from './utils'
import defineReactive from './defineReactivate'
import { array } from './array'
import { arrayMethods } from './array'
export default class Observer {
  constructor (value) {
    def(value, '__ob__', this, false)
    console.log('这是Observer构造器', value)
    if(Array.isArray(value)){
      Object.setPrototypeOf(value,arrayMethods)
    }else {
      this.walk(value)
    }
  }

  walk (value) {
    for (let key in value) {
      defineReactive(value, key)
    }
    console.log('这是Observer构造器1', value)
  }
}
