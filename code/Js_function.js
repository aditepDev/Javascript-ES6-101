function fn_ (a,b){
    return a+b
}
const arrowfn=(a,b)=>{
    console.log('code... 1')
    console.log('code... 2')
    return a+b
}
const arrowfn2=(a,b)=>a+b
const arrowfn3=a=>a+100
const arrowfn4=name=>(
    {name:name,age:10})


function student(name){
    let user = {Name:name,age:10}
    console.log(user)
}

let result = fn_(200,500)
let result2 = arrowfn(200,500)
let result3 = arrowfn2(200,500)
let result4 = arrowfn3(50)
let result5 = arrowfn4('top')
student('top2')
console.log(result)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)

