const myConst ='amar shonar bangla ami tomay valobashi';

const word = myConst.split(' ')
console.log(word)
const withoutA = myConst.split('a')
console.log(withoutA)
const smallslice = myConst.slice(5,18)
console.log(smallslice)
const substr = myConst.substr(12,17)
console.log(substr)

const subStrings = myConst.substring(0,18)
console.log(subStrings)
const fastName = 'Mohammod'
const lastName = 'Rubel'
const fullName = fastName.concat(' '+ lastName)
console.log(fullName)

const arr = ['amir','emrul','jahid','hasan','nafis']
const total = arr.join(' ')
console.log(total)