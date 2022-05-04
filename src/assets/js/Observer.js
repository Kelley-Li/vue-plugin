import {def} from './utils'
import defineReactive from './defineReactivate'
import {arrayMethods} from './array'
import {observe} from "@/assets/js/observe";
import Dep from './Dep'

export default class Observer {
  constructor(value) {
    this.dep = new Dep
    def(value, '__ob__', this, false)
    console.log('这是Observer构造器', value)
    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods)
      this.observerArray(value)
    } else {
      this.walk(value)
    }
  }

  walk(value) {
    for (let key in value) {
      defineReactive(value, key)
    }
  }

  observerArray(arr) {
    for (let i = 0, l = arr.length; i < l; i++) {
      observe(arr[i])
    }
  }
}
