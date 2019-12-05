//Destructuring Object

var player= {
    name:"aditep",
    skill:"java python sql"
}
// Old
var name2=player.name
var skill2=player.skill
console.log(`name = ${name2} , skill = ${skill2}`)

// New

let{name,skill} = player
console.log(`name = ${name} , skill = ${skill}`)