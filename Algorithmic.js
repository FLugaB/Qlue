/*

Algorithmic

In the language of your choice, write a function which, 
taking a positive integer n as input, 
finds all sets of numbers that sum up to n.

For example, n=4, we have: 4

3,1
2,2
2,1,1
1,1,1,1
Note that 2,1,1 is same as 1,2,1 or 1,1,2.

*/

let n = 4;
let arr = [];

const findWays = (arr, i, n) => {

    if (n == 0 && arr.length > 1) {
        console.log(arr)
    }
        

    for (var j = i; j <= n; j++) {
        arr.push(j);

        findWays(arr, j, n - j);
 
        arr.pop();
    }
}

findWays(arr, 1, 4)
// 1,1,1,1
// 2,1,1
// 3,1
// 2,2



