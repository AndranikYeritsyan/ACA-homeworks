//ex 1
// let evenNumbers = [];
// let oddNumbers = [];
// function allNubersArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             evenNumbers.push(arr[i]);
//         } else {
//             oddNumbers.push(arr[i]);
//         }
//     }
//     let myObj = { oddNumbers, evenNumbers }
//     return myObj
// }
// fn = allNubersArr([22,37,115,208,1554,1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(fn)

//ex2
// let newArr = [];
// function filterRange(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > a && arr[i] < b) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// fn = filterRange([1, 2, 5, 10, 12, 15, 18, 25], 5, 26);
// console.log(fn);


//ex3
// const frameworks = [
//     { id: 1, title: "react" },
//     { id: 2, title: "angular" },
//     { id: 3, title: "vue" }
// ]
// function findById(frameworks, num) {
//     for (i = 0; i < frameworks.length; i++) {
//         if (frameworks[i].id === num) {
//             return frameworks[i]
//         }
//     }
//     return "No Data";
// }
// console.log(findById(frameworks, 2));



//ex4
// arr = ["Godfather", "Whiplash", "Social   Network"];
// myNewGeneretedArr = [];
// function generate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         myNewGeneretedArr.push({});
//         myNewGeneretedArr[i].title = arr[i];
//         myNewGeneretedArr[i].idx = i;
//     }
//     return myNewGeneretedArr;
// }
// console.log(generate(arr));


//ex5
// arr = ["Godfather", "Whiplash", "Social   Network"];
// function removeByLetter(arr, letter) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][0] == letter.toUpperCase() || arr[i][0] == letter.toLowerCase()) {
//             arr.splice(i, 1);
//         }
//     }
//     return arr;
// }
// console.log(removeByLetter(arr, "g"));


//ex6
// function repeatLonger(str1, str2) {
//     if (str1.length > str2.length) {
//         let roundedQuotient = Math.ceil(str1.length / str2.length);
//         let d = str2.repeat(roundedQuotient);
//         let arr = d.split('');
//         let finallyArr = arr.slice(0, str1.length);
//         str2=finallyArr.join("")
//         return str2;
//     } else {  
//         let roundedQuotient = Math.ceil(str2.length / str1.length);
//         let d = str1.repeat(roundedQuotient);
//         let arr = d.split('');
//         let finallyArr = arr.slice(0, str2.length);        
//             str1=finallyArr.join("")
//         return str1;
//     }
// }
// fn = repeatLonger("12222", "And")
// console.log(fn)
