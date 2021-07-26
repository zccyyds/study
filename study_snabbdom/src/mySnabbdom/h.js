import vnode from './vnode'

//形态① h('div',{},'文字|数字')
//形态② h('div',{},[])
//形态③ h('div',{},h())
export default function(sel, data, c){
    //检查参数个数
    if(arguments.length != 3){
        throw new Error('该h函数为阉割版，有且只能传入三个参数！！！')
    }
    //检查参数的类型
    if(typeof c == 'string' || typeof c == 'number'){
        //形态①
        return vnode(sel, data, undefined, c, undefined)
    }else if(Array.isArray(c)){
        let children = []
        //形态②
        for(let i = 0; i < c.length; i++){
            if(!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel')))
                throw new Error('传入的数组中有item不是h函数')
            //这里不需要执行c[i]，因为在测试语句中已经执行了
            children.push(c[i])
        }

        return vnode(sel, data, children, undefined, undefined)
    }else if(typeof c == 'object' && c.hasOwnProperty('sel')){
        //形态③
        let children = [c]

        return vnode(sel, data, children, undefined, undefined)
    }
    else{
        throw new Error('传入的第三个参数的类型不符合要求！！！')
    }
}