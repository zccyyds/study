//真正创建节点

export default function (vnode,pivot) {
    //创建一个dom节点
    let domNode = document.createElement(vnode.sel)
    //判断子节点为文本
    if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)){
        domNode.innerText = vnode.text
        // 将孤儿节点上树 
        console.log(pivot)
        pivot.parentNode.insertBefore(domNode,pivot)
    }
    //判断子节点为vnode
    else if(Array.isArray(vnode.children) && vnode.children.length > 0){}
}