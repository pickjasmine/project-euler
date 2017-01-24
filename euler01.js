/**
 * Created by Jasmine on 1/23/2017.
 */
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum = sum + i;
    }
}

console.log(sum);