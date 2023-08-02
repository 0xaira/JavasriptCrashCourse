// if 

// if (condition) {
//     // code
// }

let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
}
else {
    console.log('Good evening');
}

// switch

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}

// ternary operator

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);


// if else electricy bill

let units = 100;

if (units <= 50) {
    console.log(units * 0.5);
}
else if (units <= 150) {
    console.log(units * 0.75);
}
else if (units <= 250) {
    console.log(units * 1.2);
}
else {
    console.log(units * 1.5);
}

