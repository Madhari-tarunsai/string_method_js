// Find the sum of the reversed numbers array using reduce.
// const numbers= [50, 40, 30, 20, 10]
// let op=numbers.reverse()
// let num=op.reduceRight(function(x,y){
//     return x+y
// })
// console.log(`reverse of an arr is[ ${op}]`)
// console.log(`sum of reverse arr [${op}] is [${num}]`)
//////////////////////////////////////////////////////////////////////////////////////
// 	Filter out words that have greater than or equal to 5 characters.
let str=["hello","css","javascript","react","nodejs"]
let op=str.filter(function(x){
    return x.length>=5
})
console.log(op)
