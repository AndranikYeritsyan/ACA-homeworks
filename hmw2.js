//ex1+
/*function myFunction(myArr, number) {
    newArr = [];
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] > number) {
            newArr.push(myArr[i]);

        }

    }
    return newArr;
}
console.log(myFunction([12, 13, 8, 7, 56, 58, 2], 10));*/

//ex2-




//ex3+

/*function myIndex(arr) {
    let max = arr[0];
    let index = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }

    }
    return index;
}
console.log(myIndex([1, 2, 3, 5, 4]));*/


//ex4+
/*function myFunction() {
    arr = [1, 2, 3, 4, 5, 12, 8, 9];
    newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        b = arr[i] * arr[i + 1];
        newArr.push(b);
    }
    max = newArr[0];
    for (i = 0; i < newArr.length; i++) {
        if (newArr[i] > max) {
            max = newArr[i];
        }
    }
    return max;
}
console.log(myFunction())*/

//ex5+
/*newArr = [];
newArrFinnely = [];
function myArr(arr) {
    let qanak;
    min = arr[0];
    max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    for (i = min; i <= max; i++) {
        newArr.push(i);
    }
    for (i = 0; i < newArr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (newArr[i] == arr[j]) {
                newArrFinnely.push(newArr[i]);
                break;
            }

        }
    }
    return qanak = newArr.length - newArrFinnely.length;
}
let fn = myArr([12, 2, 8, 5, 1, 0]);
console.log(fn);*/


//ex6+

/*function myNewArr(arr) {
    arr2 = [];
    for (i = 0; i < arr.length; i++) {
        let gumar = 0;
        for (j = 0; j < arr[i].length; j++) {
            gumar += arr[i][j]
        }
        arr2.push(gumar);
    } 
    return arr2;
}
let fn=myNewArr([[3,4,5], [1,0,0], [4,5,4],[8,8,-1]]);
console.log(fn);*/



//ex7+

/*function myArr(arr){
    newArr=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            newArr.push(arr[i]);
        }
    }
    for(i=0;i<newArr.length;i++){
        newArr[i]=newArr.length*newArr[i];
    }
    return newArr;
}
let fn=myArr([1,2,3,4,5,6,7]);
console.log(fn);*/





