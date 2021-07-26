/*
* vnode方法是为了返回一个虚拟节点对象 
*/

export default function vnode(sel, data, children, text, elm) {
    return {
        sel, data, children, text, elm
    }
}
