//for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// break and continue 
for (let i = 0; i < myArray.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(myArray[i]);
}

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

