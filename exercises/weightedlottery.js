// const weightedLottery = weights => {
//     // keep track of your  weights
//     // ['green', 'yellow', 'yellow', 'red', 'red', 'red']
//     let containerArray = [];

//     Object.keys(weights).forEach(key =>{
//         for (i = 0; i < weights[key]; i++) {
//             containerArray.push(key);
//         }
//     })
//     return containerArray[Math.floor(Math.random() * containerArray.length)]
// }

// const weights = {
//     winning: 1,
//     losing: 1000
// }

// console.log(weightedLottery(weights))




const weightedLottery = weights => {
    // keep track of your  weights
    // ['green', 'yellow', 'yellow', 'red', 'red', 'red']
    let containerArray = [];

    
    for (var key in weights) {
        for (i = 0; i < weights[key]; i++) {
            containerArray.push(key);
        }
    }

    return containerArray[Math.floor(Math.random() * containerArray.length)]
}

const weights = {
    winning: 1,
    losing: 1000
}

console.log(weightedLottery(weights))