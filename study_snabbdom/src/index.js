import h from './mySnabbdom/h'

var myVode1 = h('div',{},[
    h('li',{},'嘻嘻'),
    h('li',{},'哈哈'),
    h('li',{},[
        h('span',{},'嘿嘿')
    ])
])

console.log(myVode1)