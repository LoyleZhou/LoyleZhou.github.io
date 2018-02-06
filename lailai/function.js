// ES6前不允许给参数赋默认值，因此一般都通过变通的方式
function lai(a,b){
    b = b || '来吧哥哥';
    console.log(a, b);
}
lai('你好啊','来吧哥哥'); // 你好啊来吧哥哥
lai('来吧哥哥'); // 来吧哥哥来吧哥哥
lai('你好吗',''); // 你好吗来吧哥哥

// ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面
function lai1(a, b = '来吧哥哥'){
    console.log(a, b);
}
lai1('hello', 'Loyle'); // hello Loyle
lai1('hello'); // hello 来吧哥哥
lai1('hello', ''); // hello

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  
  const p = new Point();
  p; // { x: 0, y: 0 }
  console.log(p);

// 函数的 length 属性
// 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数
// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
// 同理，rest 参数也不会计入length属性
const a = (function (a) {}).length; // 1
b = (function (a, b = 1) {}).length; // 1
c = (function (a = 2) {}).length; // 0
d = (function (a, b =1, c) {}).length // 1
console.log(a,b,c,d);

// 应用演示：利用参数默认值可以指定某一个参数不能省略，如果省略就跑出一个错误
function throwIfmissing (){
    throw new Error('Missing parameter');
};
function foo (mustBeProvided = throwIfmissing()) {
    return mustBeProvided;
};
console.log(foo('lailai')); // lailai
// foo(); // Error: Missing parameter

// 另外，可以将参数默认值设为undefined，表明这个参数是可以省略的。
function foo1 (optional = undefined) {
    console.log(optional)
}
foo1();

// argument变量的写法
function sortNumbers() {
    return Array.prototype.slice.call(arguments).sort();
  }
console.log(sortNumbers(1,3,45,0,2));
// rest 参数的写法
const sortNumbers1 = (...numbers) => numbers.sort();
console.log(sortNumbers(3,56,2,0));

function push(array, ...items) {
    items.forEach(function(item) {
      array.push(item);
      console.log(item);
    });
  }
  var ab = [];
  push(ab, 1, 2, 3,4,2)
  console.log(ab)

// 函数的length属性，不包括 rest 参数
// 注意：rest参数后面不能再有其他参数，否则会报错
(function(a) {}).length  // 1
(function(...a) {}).length  // 0
(function(a, ...b) {}).length  // 1
function abc (a, ...b, c); // 报错
