function aaa(){
    console.log(2222222)
}

var aa = {c: aaa()}
aa.c
if(!(typeof aa.c == 'Object')){
    console.log('111111111')
}