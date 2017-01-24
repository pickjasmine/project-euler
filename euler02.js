/**
 * Created by Jasmine on 1/23/2017.
 */
var i = 0;
var j = 1;
var sum = 0;

while (j < 4000000) {
    var fib = i + j;
    if (fib % 2 == 0) {
        sum = sum + fib;
    }
    i = j;
    j = fib;
}

console.log(sum);