// Template Literals

// แบบเดิม

const name="aditep",last="campira",city="udonthani"


const all = 'name'+name+'last'+last+'\
\ncity'+city

// แบบใหม่

const allname = `Name = ${name} Last = ${last} city= ${city}`
const allname2 = `Name = ${name} Last = ${last} 
city= ${city}`
console.log(all)
console.log(allname2)