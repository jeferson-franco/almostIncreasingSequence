function solution(sequence) {
    let found = false;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            if (found) {
                return false;
            }
            found = true;
            if (i === 1 || i + 1 === sequence.length) {
                continue;
            } else if (sequence[i] > sequence[i - 2]) {
                sequence[i - 1] = sequence[i - 2];
            } else if (sequence[i - 1] >= sequence[i + 1]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test almostIncreasingSequence

// alternative solution
// function solution(sequence) {
//     let bad = 0;
//     for (let i = 1; i < sequence.length; i++) {
//         if (sequence[i] <= sequence[i - 1]) {
//             bad++;
//             if (bad > 1) {
//                 return false;
//             }
//             if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// alternative solution
// function solution(sequence) {
//     let count = 0;
//     for (let i = 0; i < sequence.length; i++) {
//         if (sequence[i] <= sequence[i - 1]) {
//             count++;
//             if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
//                 return false;
//             }
//         }
//     }
//     return count <= 1;
// }

// alternative solution
// function solution(sequence) {
//     if(sequence.length <= 2) return true;
//     let error = 0;
//     for(let i = 0; i < sequence.length -1; i++) {
//         if(sequence[i] >= sequence[i+1]) {
//             let noStepBack = sequence[i-1] && sequence[i-1] >= sequence[i+1];
//             let noStepForward = sequence[i+2] && sequence[i] >= sequence[i+2];
//             if(i > 0 && noStepBack && noStepForward) {
//                 error += 2;
//             } else {
//                 error++;
//             }
//         }
//         if(error > 1) return false;
//     }
//     return true;
// }
