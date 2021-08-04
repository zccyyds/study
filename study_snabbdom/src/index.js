import h from './mySnabbdom/h'
import patch from './mySnabbdom/patch'

var myVode1 = h('h1',{},'你好')

const container = document.getElementById('container')

patch(container,myVode1)