import { observe } from '@/assets/js/observe'
import Watcher from "@/assets/js/Watcher";
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
new Watcher(obj,'a.m.n',(val)=>{
  console.log('****',val)
})
obj.a.m.n  = 88
console.log(obj)
