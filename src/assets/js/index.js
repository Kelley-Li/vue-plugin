import defineReactive from "./defineActivate"
import Observer from "./Observer"
var obj = {
    a: {
        m: {
            n: 5
        }
    },
    b:4
}

// 继续创建observe

function observe(value) {
    //如果value不是对象，什么都不做
    if (typeof value != 'object') return
    var ob
    if (typeof value.__ob__ !== 'undefined') {
        ob = value.__ob__
    }
    else {
        ob = new Observer(value)
    }
    return ob
}

observe(obj)