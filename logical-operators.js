// const password = prompt('Enter a password');

// if (password.length >= 6 && password.indexOf(' ') === -1){
//     console.log('valid password!')
// } else {
//     console.log('invalid password')
// }

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

// const age = 70;

// if (age >= 0 && age < 5 || age >= 65) {
//     console.log('FREE')
// } else if (age >=5 && age > 10) {
//     console.log('$10')
// } else if (age >=10 && age < 65) {
//     console.log('$20')
// } else {
//     console.log('invalid age')
// }


// const firstName = prompt("Enter your first name")
// if(!firstName){
//     prompt("Try again!")
// }


const age = 45
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log('YOU ARE NOT A BABY OR A SENIOR!')
}