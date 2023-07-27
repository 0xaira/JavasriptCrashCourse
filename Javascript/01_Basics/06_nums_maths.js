//**********************Numbers*************************

const item =15;
console.log(item);
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 2 decimal places
console.log(balance.toFixed(5)); // 5 decimal places
console.log(balance.toPrecision(9)); // 9 significant digits

const hundred = 1000000000000;
console.log(hundred.toExponential(2)); // 1.00e+12
console.log(hundred.toLocaleString('en-IN')); // 1,000,000,000,000

Number.MAX_VALUE;
Number.MIN_VALUE;

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


//**********************Maths*************************

console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(2.4));
console.log(Math.ceil(2.5));
console.log(Math.floor(2.6));
console.log(Math.trunc(2.7));
console.log(Math.sign(-2.8));
console.log(Math.sign(2.9));
console.log(Math.pow(2,3));
console.log(Math.sqrt(4));
console.log(Math.abs(-5));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));
console.log(Math.sin(90));
console.log(Math.cos(90));
console.log(Math.tan(90));
console.log(Math.log(10));
console.log(Math.random()*(10)+1);
console.log(Math.floor(Math.random()*(10)+1));

const min =10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1)+min));
