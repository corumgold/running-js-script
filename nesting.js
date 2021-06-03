const password = prompt("please enter a password");

// Password must be 6+ Characters
if (password.length >= 6) {
    // console.log('Long enough password!')
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Hey! No spaces!")
    }
} else {
    console.log('PASSWORD TOO SHORT. MUST BE 6+ CHARACTERS')
}

// Password cannot include spaces
// if (password.indexOf(' ') === -1) {
//     console.log("Good job! No spaces!")
// } else {
//     console.log("Hey! No spaces!")
// }