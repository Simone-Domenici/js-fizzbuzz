// Stampare numeri da 1 a 100
for ( let i = 0; i < 100; i++ ) {
    let num = i + 1
    // console.log(num)
    // per i multipli di 3 stampare "Fizz"
    let rest3 = num % 3
    let numThreeMultiples = rest3 === 0
    // console.log(rest3,numThreeMultiples)
    if (numThreeMultiples) {
        console.log('Fizz')
    } else 
        console.log('-----')
    // per i multipli di 5 stampare "Buzz"
    let rest5 = num % 5
    let numFiveMultiples = rest5 === 0
    if (numFiveMultiples) {
        console.log('Buzz')
    } else 
        console.log('-----')
}   