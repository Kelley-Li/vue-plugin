import { def } from "./utils";
import defineReactive from "./defineActivate";
export default class Observer {
  constructor(value) {
    def(value, '__ob__', this, false)
    console.log('这是Observer构造器', value);
    this.walk(value)
  }
  walk(value) {
    for (let key in value) {
      defineReactive(value, key)
    }
  }
}