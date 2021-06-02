let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5")
}
else{
    console.log("Your number is less than 0.5")
}
console.log(random)





const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

if (dayOfWeek === "monday") {
    console.log('ugh, I hate mondays')
}
else if (dayOfWeek === 'saturday') {
    console.log('yay, I love saturdays')
}
else if (dayOfWeek === 'friday') {
    console.log('okay, I like fridays')
}
else {
    console.log('meh')
}


// 0 - 5 - FREE 
// 5 - 10 - CHILD $10
// 10 - 65 - ADULT $20
// 65+ - SENIOR $10

const age = 9;
if (age < 5) {
    console.log("You are a baby. You get in for free!")
}
else if (age < 10) {
    console.log("You are a child. You pay $10.")
}
else if (age < 65) {
    console.log("You are an adult. You pay $20.")
}
else if (age >= 65) {
    console.log("You are a senior. You pay $10.")
}
else {
    console.log("invalid age")
}