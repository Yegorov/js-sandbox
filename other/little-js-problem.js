/*
The problem: define functions range, map, reverse and foreach, 
obeying the restrictions below, such that the following program works properly. 
It prints the squares of numbers from 1 to 10, in reverse order.
more see: http://lisperator.net/blog/a-little-javascript-problem/
*/

function* range(start, end) {
  for(var i = start; i <= end; ++i) {
    yield i;
  }
}
function* map(gen, func) {
  for(let value of gen) {
    yield func(value);
  }
}
function* reverse(gen) {
  for(let value of gen) {
    yield* reverse(gen);
    yield value;
  }
}
function foreach(gen, func) {
  for(let value of gen) {
    func(value);
  }    
}

/* or minify version
function* range(start, end) { for(var i = start; i <= end; ++i) yield i; }
function* map(gen, func) { for(let value of gen) yield func(value); }
function* reverse(gen) { for(let value of gen) { yield* reverse(gen); yield value;} }
function foreach(gen, func) { for(let value of gen) func(value); }
*/

var numbers = range(1, 10);
numbers = map(numbers, function (n) { return n * n });
numbers = reverse(numbers);
foreach(numbers, console.log);

/* output:

   100
   81
   64
   49
   36
   25
   16
   9
   4
   1
*/
