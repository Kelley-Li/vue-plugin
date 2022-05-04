var uid = 0
export default class Dep {
  constructor() {
    console.log('我是dep类的构造器')
    this.subs = []
    this.id = uid++
  }

  //  添加订阅
  addSub(sub) {
    this.subs.push(sub)
  }

  //添加依赖
  depend() {
    if (Dep.target) {
      this.addSub(Dep.target)

    }
  }

  notify() {
    console.log('我是notify')
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}
