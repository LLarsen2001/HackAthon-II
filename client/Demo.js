
// let arr = [1, 2, 36, 4, 5, 6, 7]
// let arr1 = [-39, -2, -3, 12, -5]

// const hishestValue = (Array) => {
//   let high = Array[0]
//   for (let i = 0; i < Array.length; i++) {
//     if (Array[i] > high) {
//       high = Array[i]
//     }
//   }
//   return high
// }
// console.log(hishestValue(arr))
// console.log(hishestValue(arr1))

// let num1 = 1
// let num2 = 2

// const addSum = (num, num2) => {
//   return (num + num2)
// }

// console.log(addSum(num1, num2))



// const fizzBuzz = (num) => {

//   if (num % 15 == 0) {
//     return 'FizzBuzz'
//   } else if (num % 5 == 0) {
//     return 'Buzz'
//   } else if (num % 3 == 0) {
//     return 'Fizz'
//   }
// }

// console.log(fizzBuzz(3))
let arr1 = [-45, 4, 5, -3, 32, 29]
let arr = [1, 2, 4, 6, 4, 2, 45, 6, 7]
const highlow = (arr) => {
  let high = arr[0]
  let low = arr[0]

  arr.forEach(num => {
    if (num >= high) high = num
  })
  arr.forEach(num => {
    if (num <= low) low = num
  })

  return [high, low]
}
console.log(highlow(arr)) //return and array of [high, low]
console.log(highlow(arr1)) //return and array of [high, low]