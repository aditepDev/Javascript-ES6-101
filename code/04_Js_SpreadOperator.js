// Spread Operator

// Array
let fruit=['มะม่วง','แตงโม']
console.log(fruit)
let foot=['ส้มตำ','ไก่ย่าง']
console.log(foot)
let allFoot=[...fruit,...foot]
console.log(allFoot)

let product={name:"pen",prine:200}
console.log(product)
let newproduct={...product,category:"Supplies"}
console.log(newproduct)
let newprice={...newproduct,prine:500}
console.log(newprice)
console.log('name Product = ',newprice.name)