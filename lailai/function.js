// ES6前不允许给参数赋默认值，因此一般都通过变通的方式
function lai(a,b){
    b = b || '来吧哥哥';
    console.log(a, b);
}
lai('你好啊','来吧哥哥');
lai('来吧哥哥');
lai('你好吗','')

// ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面

function lai1(a, b = '来吧哥哥'){
    console.log(a, b);
}
lai1('hello', 'Loyle');
lai1('hello');
lai1('hello', '');