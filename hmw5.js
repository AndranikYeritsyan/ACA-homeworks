//ex1
// function isogram(str){
//     for(let i=0;i<str.length-1;i++){
//         for(let j=i+1;j<str.length;j++){
//             if(str[i].toLowerCase()==str[j].toLowerCase()){
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(isogram("AndD"))


//ex2
// function isOllDigitsEvenNumber(num) {
//     let numStr = String(num);
//     let balance = num % 10;
//     if (numStr.length == 1) {
//         if (numStr % 2 == 0) {
//             return false
//         }
//         return true
//     }
//     if (balance % 2 == 0) {
//         return false
//     }
//     return isOllDigitsEvenNumber((num - (num % 10)) / 10)
// }
// console.log(isOllDigitsEvenNumber(915))


//ex3
// function flattnesArr(arr) {
//     let newArr = [];
//     count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             for (let j = 0; j < arr[i].length; j++) {
//                 newArr.push(arr[i][j])
//             }
//         }
//         else {
//             newArr.push(arr[i]);
//         }
//     }
//     arr = newArr;
//     for (let i = 0; i < arr.length; i++) {//base case
//         if (!Array.isArray(arr[i])) {
//             count = count + 1;
//             if (count == arr.length) {
//                 return arr
//             }
//             continue
//         }
//         return flattnesArr(arr)
//     }
// }
// console.log(flattnesArr([14, [1, [[[3, []]], 1], 0]]))



//ex4
// function calculateNumberDigits(num) {
//     result = 0;
//     strNum = String(num);
//     for (let i = 0; i < strNum.length; i++) {
//         result += +strNum[i]
//     }
//     if (result < 10) {
//         return result;
//     }
//     else {
//         return calculateNumberDigits(result)
//     }
// }
// console.log(calculateNumberDigits(8765))

//ex5
// function serchElementsIndex(arr, element) {
//     left = -1;
//     right = arr.length;
//     while (right - left > 1) {
//         let middle = Math.ceil((right + left) / 2);
//         if (arr[middle] === element) {
//             return middle;
//         }
//         if (arr[middle] > element) {
//             right = middle;
//         } else {
//             left = middle;
//         }
//     }
//     return "element missing"
// }
// console.log(serchElementsIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1))