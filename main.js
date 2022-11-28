// 1-misol

function count(para1, para2) {
    let result = 0;
    for(let i = 0; i < para1.length; i++)
    if(para1[i] == para2) {
        result = i
    }

    return result
}

console.log(count(['salom','alik','nok',], 'nok'));



// 2-misol

// function func(para1) {

//     return para1[para1.length-1]
// }

// console.log(func(['salom','nok','olma',]))