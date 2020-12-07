//ex1

// function recursiv(arr,i=0){
//     if(arr.length<=1){
//         return []
//     }
//     if(i===arr.length-1){
//         arr.pop();
//         return arr
//     }
//     arr[i]=arr[i+1];
//     return recursiv(arr,i+1)
// }
// console.log(recursiv([7,5,3,4,6]));


//ex2
// function transferKeysValues(obj) {
//     let arrValue=[];
//     let arrKey=[];
//     let newObj={};
//     for (let key in obj) {
//         arrValue.push(obj[key]);
//         arrKey.push(key);
//     }
//     for(i=0;i<arrValue.length;i++){//uniq arjeqneri stacum tveri
//         for(j=i+1;j<arrValue.length;j++){      
//             if(arrValue[i]==arrValue[j]){
//                 arrValue.splice(arrValue[j-1],1)            
//             }      
//         }
//     }
//     for(let i=0;i<arrValue.length;i++){
//         for(let keys in obj){
//             if(obj[keys]===arrValue[i]){
//                 // newObj[arrValue[i]]=keys
//             }
//         }
//         // newObj[arrValue[i]]=arrKey[i];
//    }
//     // console.log("value",arrValue)
//     // console.log("keys",arrKey)
//      console.log(newObj)
//     return obj
// }
// console.log(transferKeysValues({ "a": 1, "b": 2, "c": 1 })) //{1:[a,c],2:b}


//ex3

// function sortPersent(list) {
//     let arr = [];
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].readStatus == true) {
//             arr.push(list[i].percent)
//         }
//     }
//     return arr.sort((a, b) => b - a)
// }
// console.log(sortPersent(list = [
//     { book: "Catcher in the Rye", readStatus: true, percent: 40 },
//     { book: "Animal Farm", readStatus: true, percent: 20 },
//     { book: "Solar, readStatus", readStatus: false, percent: 90 },
//     { book: "The Fall", readStatus: true, percent: 50 },
//     { book: "White Nights", readStatus: false, percent: 60 },
//     { book: "After Dark", readStatus: true, percent: 70 }
// ]))


//ex4
// function rotation(arr, n) {
//     if (n < 0) {
//         arr.unshift(arr[arr.length - 1]);
//         arr.splice(arr.length - 1, 1)
//         return rotation(arr, n + 1)
//     }
//     if (n == 0) {
//         return arr;
//     }
//     if (n > 0) {
//         arr.push(arr[0]);
//         arr.splice(0, 1)
//         return rotation(arr, n - 1)
//     }
// }
// console.log(rotation(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3))








  
