import { observe } from '@/assets/js/observe'

export default function defineReactive (data, key, val) {
  console.log('我是defineReactive', key)

  if (arguments.length == 2) {
    val = data[key]
  }
  let childOb = observe(val)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get () {
      console.log('正在访问obj的' + key + '属性')
      return val
    },
    set (newValue) {
      console.log('正在更改obj的' + key + '属性')
      if (val === newValue) return
      val = newValue
      childOb = observe(val)
    }

  })
}
