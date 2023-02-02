let arrays = [[1, 2, 3], [4, 5], [6]];
arrays.reduce((arr1, arr2) => arr1.concat(arr2));
// → [1, 2, 3, 4, 5, 6]

// Your code here
export function loop(value, text, update, body) {
    for (let random = value; test(random); random = update(random)) {
        body(random)
    }

}
loop(3, n => n > 0, n => n - 1, console.log);


export function everyLoop(array, test) 
    let afterValue = true
    for (let item of arrays){
        afterValue = afterValue && text(item)
    }
    return afterValue
{
}
console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

export function everySome(array, test) {
    return !array.some(item => {
        if (!test(item)){
        }
        return !test(item)
    })
}
{
// Your code here.
} 

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true