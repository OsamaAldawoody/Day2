//var arr1 = ["osama", "sara", "jomana", "Omar", "Sali", "Jamal"];



//////arr.forEach(function loop(element, index) {
//////    console.log(index + " " + element);
//////});

////arr.forEach((element, index) =>
////    console.log(index + " " + element)
////);

////var nam = arr.filter(element => element=="osama");

//var arr = [4, 12, 50, 67, 19, 7, 80, 20, 10];

////var sortArr = arr.sort((first, second) => first - second);
//var maxArr = Math.max(...arr);
//var sortArr1 = arr1.sort(function (first, second) {
//    first = first.toLowerCase();
//    second = second.toLowerCase();
//    if (first > second)
//        return 1;
//    else if (second > first)
//        return -1;
//    else
//        return 0;
//}); 


//var numbers = [5, 6, 2, 3, 7];
//var max = Math.max.apply(null, numbers);
//var arr = [9, 10, 11];
//numbers.push.apply(numbers, arr);

//function minOfArray(arr) {
//    var min = Infinity;
//    var QUANTUM = 32768;

//    for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
//        var submin = Math.min.apply(null,
//            arr.slice(i, Math.min(i + QUANTUM, len)));
//        min = Math.min(submin, min);
//    }

//    return min;
//}
//var arr = [];
//for (var i = 0; i < 100000; i++) {
//    arr[i] = i;
//}
//var min = minOfArray.apply(null, arr);

var arr = [1, 4, 2, 4, 1];
var newarr = arr.sort().reverse();
function func(arg1, arg2) {
    console.log(arguments);
    console.log(Array.prototype.slice.call(arguments));
}