import { observe } from '@/assets/js/observe'
let obj = {
    a: {
        m: {
            n: 5
        }
    },
    b:4,
  g:[23,12,34,56,3]
}

// 继续创建observe



observe(obj)
obj.g.push(88)
