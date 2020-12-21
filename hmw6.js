//ex1
//function getAnagrams(word, arr) {
//     len = word.length;
//     arrWord = word.split("").sort();
//     let result = arr.filter(words => words.length == len)
//     for (let i = 0; i < result.length; i++) {
//         resultDigit = result[i].split("").sort();
//         for (j = 0; j < arrWord.length; j++) {
//             if (arrWord[j] == resultDigit[j]) {
//                 continue
//             } else {
//                 result.splice(i, 1)
//             }
//         }
//     }
//     return result
// }
// console.log(getAnagrams('pencil', ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec']))

//ex2
// let newArr = []
// function giveCombinetion(str, len) {
//     let result = '';
//     let arrStr = str.split('');
//     if (arrStr.length > len) {
//         for (let i = 0; i < len; i++) {
//             result += arrStr[i];
//         }
//         newArr.push(result);
//         arrStr.shift();
//         str = arrStr.join('');
//         return giveCombinetion(str, len)
//     }
//     if (len === str.length) {
//         for (let i = 0; i < len; i++) {
//             result += arrStr[i];
//         }
//         newArr.push(result);

//         return newArr
//     }
// }
// console.log('Andranik', giveCombinetion('Andranik', 2))



// //ex3
// function randomArr(arr) {
//     var currentIndex = arr.length;
//     while (0 !== currentIndex) {
//         let randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         let nextValue = arr[currentIndex];
//         arr[currentIndex] = arr[randomIndex];
//         arr[randomIndex] = nextValue;
//     }
//     return arr;
// }
// console.log(randomArr([5,6,185,2,123,596,25]));


//ex4
// function concatArrays(...arg) {
//     concatArr=[];
//     for(digit of arg){
//         for(elem of digit){
//             concatArr.push(elem)
//         }
//     }
//     return concatArr;
// }
// console.log(concatArrays(['1', 'hello'], [[1, 2], 2]))



//ex5 map
// Array.prototype.myMap = function (cb) {
//     let resultArray = [];
//     for (let index = 0; index < this.length; index++) {
//         resultArray.push(cb(this[index], index, this));
//     }
//     return resultArray;
// }
// let arr = [1, 2, 3];
// let result = arr.myMap(function (value, index, array) {
//     console.log(value, index, array)
// })

//ex5 forEach
// function myForEach(array, cb) {
//     for (let i = 0; i < array.length; i++) {
//         cb(array[i]);
//     }
// }
// function cb(element) {
//     console.log(element);
// }
// const array = [1, 2, 3, 4];
// myForEach(array, cb)


//ex5 filter
// Array.prototype.myFilter = function (cb) {
//     var filteredArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) filteredArr.push(this[i]);
//     }
//     return filteredArr;
// };
// var returnedArr = ["Ando", 'Aram', 'Eric', 'Karen', 'Vardan'].myFilter(function (elem) {
//     return elem.length <5 ;
// });
// console.log(returnedArr);


