import createElement from "./createElement";
import vnode from "./vnode";

export default function (oldVnode,newVnode) {
    //判断第一个参数是不是虚拟节点
    if(oldVnode.sel == '' || oldVnode.sel == undefined){
        //第一个传入的参数是dom节点 将dom节点吧包装成虚拟节点
        //toLowerCase()转换成小写
        oldVnode = vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)
    }
    //判断oldVnode和newVnode是不是同一个节点
    if(oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel){
        console.log('是同一个虚拟节点')
    } else{
        console.log('不是同一个虚拟节点，暴力删除旧的，插入新的')
        createElement(newVnode,oldVnode.elm)
    }
}