//ex1
/*function myNumber(number) {
    if (number % 2 == 0) {
        console.log("my number is even");

    } else {
        console.log("my number is odd");
    }

}
myNumber(129);*/


//ex2
/*function averageNumber(a, b, c, d, e) {
    return (a + b + c + d + e) / 5;
}
console.log(averageNumber(-1, 18, 3, 65, -5));*/




//ex3
/*let a = 6115;
let k = String(a);
if (a % 10 == 0 || k.length == 1) {
    console.log(a);

} else {
    b = a % 10;
    let c = (a - b) / 10;
    let d = String(b) + String(c);

    console.log(Number(d));
}*/


//ex4;
/*function checkFunction(number) {
    if (number % 3 == 0 && number % 5 == 0 && number % 7 == 0) {
        return number + " " + " is a multiple of 3, 5 and 7";

    } else {
        if (number % 3 == 0 && number % 5 == 0) {
            return number + " " + " is a multiple of 3, 5 ";
        } else {
            if (number % 3 == 0 && number % 7 == 0) {
                return number + " " + " is a multiple of 3, 7";
            } else {
                if (number % 7 == 0 && number % 5 == 0) {
                    return number + " " + " is a multiple of 5, 7";
                } else {
                    if (number % 3 == 0) {
                        return number + " " + "is a multiple of 3";
                    } else {
                        if (number % 5 == 0) {
                            return number + " " + "is a multiple of 5";
                        } else {
                            if (number % 7 == 0) {
                                return number + " " + "is a multiple of 7";

                            } else {
                                return number + " " + " is not a multiple of 3, 5 and 7";
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log(checkFunction(72));*/



//ex5 ------



//ex6
/*function calculation(num1, matOper, num2) {
    if (matOper === '+') {
        result = (+num1) + (+num2);
        return result;
    }
    else if (matOper === '-') {
        result = (+num1) - (+num2);
        return result;
    }
    else if (matOper === '*') {
        result = (+num1) * (+num2);
        return result;
    }
    else if (matOper === '/') {
        if (num2 === 0) {
            return "Cant divide by 0";

        }
        result = (+num1) / (+num2);
        return result;
    }
    else {
        return "sxalgorcoxutyan nshan";
    }
}
console.log(calculation(6, '+', 2));*/


//ex7
/*function integerNum(number, lowerNum, upperNum) {
    if (Number.isInteger(number)) {
        if (number > lowerNum && number < upperNum) {
            return true;

        }
       
    }
    return false;
}
console.log(integerNum(7, 4, 8));*/


//ex8
/*function myObj(obj, wanted) {
    for (let key in obj) {
        if (key === wanted) {
            return true;
        }

    } return false;

}
f = myObj({ age: 'aaaaa', name: 18, surname: "bbbbbb", height: 186 }, "age");
console.log(f);*/


//ex9
/*function myFunction(suff) {
    return function () {
        return suff + 'Yeritsyn';
    }
}
console.log( myFunction("Andranik")());*/