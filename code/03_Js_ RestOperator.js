// Rest Operator

const addUser=(name,last,...city)=>{
    return name + " " + last + " " + city
}

console.log(addUser('aditep','campira','udonthani','mahasarakham'))

const addMessage=(first,... message)=>{
    return message.map(m=>first+message)
}

const addNumber=(...number)=>{
    return number.reduce((first,current)=>{
        console.log('first',first)
        console.log('current',current)
        return first+current
    })
}
console.log(addNumber(20,50,30))
console.log(addMessage("Hello","JS","React"))