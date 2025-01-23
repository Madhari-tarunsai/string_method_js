// 4. Object methods
// 1.	Merge the properties of obj1 and obj2 using Object.assign.
// let num1={name:"tarunsai",class:"btech",section:"a"}
// let num2={percentage:"78%",c_name:"bvrit"}
// let op=Object.assign(num1,num2)
// console.log(op)
/////////////////////////////////////////////////////////////////////////////////////////
// 2.	Freeze the merged object using Object.freeze and try to update that freeze object.
// let num1={name:"tarunsai",class:"btech",section:"a"}
// let op=Object.freeze(num1)
// num1.name="sai"
// num1.city="sec"
// console.log(op)
// 3.	Seal the object using Object.seal.
// let num1={name:"tarunsai",class:"btech",section:"a"}
// let op=Object.seal(num1)
// num1.name="sai"
// num1.city="sec"
// console.log(op)
// 4.	Attempt to add, modify, and delete properties of the sealed object.
// let num1={name:"tarunsai",class:"btech",section:"a"}
// let op=Object.freeze(num1)
// num1.name="sai"
// num1.city="sec"
// delete num1.class;
// console.log(op)
// 5.	Check if the object is sealed using Object.isSealed.
// let num1={name:"tarunsai",class:"btech",section:"a"}
// let op=Object.seal(num1)
// let k=Object.isSealed(num1)
// num1.name="sai"
// num1.city="sec"
// console.log(op)
// console.log(k)
