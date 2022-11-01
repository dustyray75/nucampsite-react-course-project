

// const fruits = ['mangos', 'bananas', 'pineapples',1, [0]]
// console.log(fruits[0])
// console.log(fruits.indexOf('mangos123'))
// console.log(fruits.includes('mangos'))

// fruits.push('apples')
// console.log(fruits)
// fruits.pop()
// for(let i = 0; i<fruits.length ; i++){
//     console.log(fruits[i])
// }



// let i =0
// while(i< 10){
//     console.log(i)
//     i +=1;
// }

// do{
//     console.log(i)
//     i +=1;
// }while(i< 10)

// for(let i=100; i>= -100; i-=5){
//     console.log(i)
// }


// let test = 0;

// test = test + 1; // test =1
// test += 5; // test = 6

// test++

// test--

// console.log(test)


// the return keyword
//https://www.javatpoint.com/javascript-return

function returnexample(word) {
    let one = 1;

    if (one < 2) {
        return 5 + 7
    }
    else {
        return //undefined
    }

    // everything below is greyed out because it cant be reached
    return 5 + 8

    for (let i = 0; i < 100; i++) {
        console.log('this code will never reached')
    }
}

let result = returnexample();
console.log(result)
returnexample();

// you dont need a return keyword
// return can only be used once per function because it stops all execution, however it can be written multiple times
// the return keyword may or may not return a value, the return keyword can be used to just stop things












