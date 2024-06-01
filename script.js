console.log('hello');
//주석처리
alert('방가방가');
document.write('다큐몬트에요');
var a = 10;
var b;
b=100;
console.log(a+b);
console.log(7%4);
console.log(7==7);
console.log(7!=7);
console.log(7==='7');
console.log(7+parseInt('2',10));
console.log((3).toString());
var name = '히히히';
console.log(`안녕하세요, ${name}`);
var p = 'cat dog hamster alligator';
console.log(p.indexOf('dog'));
var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'; 
console.log(paragraph.split(' '))
console.log('   hello\n   '.trim());
var greeting = '   \thello\n\n   '.trim();
console.log(greeting)
var zoo = [];
zoo.push('강아지');
zoo.push('고양이');
zoo.push('새'); 
zoo.push('코끼리');
zoo.push('사자');
zoo.push('호랑타이거');
zoo.push('앙기모라이언')
console.log(zoo);
console.log(zoo.pop());
console.log(zoo.shift());
console.log(zoo[0]);
console.log(zoo[0] = '호랑이');
console.log(zoo.slice(2,3+1));
console.log(zoo.splice(2,0,1,2,3));
console.log(zoo.splice(2,3,4,5,6));
console.log(m = [[1,2,3],[4,5,6],[7,8,9]]);
console.log(m[0][2])
function hello(){console.log('hello');}
function hello(){return 'hello'}
console.log(hello());
function hello(name){return 'hello, ${name}'}
console.log(hello('참치'));
if ('참치'==='참치'){console.log('고추참치')}
if ('참치'==='조개'){console.log('고추참치')} else {console.log('고추없음')};
var dish = '고추';
if (dish === '고추'){console.log('고추참치')} else if (dish === '조개'){console.log('조개참치')}
dish = '똥'
if (dish === '고추'){console.log('고추참치')} else if (dish === '조개'){console.log('조개참치')} else {console.log('쓰레기')};
var userName = prompt();
if (userName === '존'){console.log('존하')} else if (userName === '제인'){console.log('제하')} else {console.log('님 뭐임?')};