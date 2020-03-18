// problem #1

// let i = 0;
// while ( i < 3 ) {
//     console.log("I am starting to feel a little loopy.");
//     i++;
// }


// problem #2

// let i = 0;
// while ( i <= 20 ) {
//     if ( i % 2 === 0 ) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     };
// i++;
// }


// problem #3

// let i = 0;
// while ( i <= 10 ) {
//     console.log(i * 9);
//     i++;
// }


// problem #4

// let i = 36;
// while ( i >= 1) {
//     console.log(i / 2);
//     i--;
// }


// problem #5

let i = 0;
while ( i<= 80 ) {
    if ( i < 79) {
        console.log (`There is only room for ${80-i} more books!`);
    } else if ( i === 79 ){
        console.log (`There is only room for ${80-i} more book!`);
    } else {
        console.log (`You're out of space on this bookshelf! Long live the books!`);
    };
    i++;
}