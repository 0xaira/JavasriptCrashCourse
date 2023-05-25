
let markHeight=1.69;
let markWeight=78;

let johnHeight=1.95;
let johnWeight=92;

let markBMI=markWeight/(markHeight**2);
let johnBMI=johnWeight/(johnHeight**2);
if(markBMI>johnBMI){
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
}
else{
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}


let tip= 500;
if(tip>=50 && tip<=300){
    console.log(`The bill was ${tip}, the tip was ${tip*0.15} and the total value ${tip*1.15}`);
}
else{
    console.log(`The bill was ${tip}, the tip was ${tip*0.2} and the total value ${tip*1.2}`);
}
tip>=50 && tip<=300?console.log(`The bill was ${tip}, the tip was ${tip*0.15} and the total value ${tip*1.15}`):console.log(`The bill was ${tip}, the tip was ${tip*0.2} and the total value ${tip*1.2}`);


let team1="Dolphins";
let team2="Koalas";
let team1Score1=960;
let team1Score2=108;
let team1Score3=89;
let team2Score1=88;
let team2Score2=91;
let team2Score3=110;
let team1Avg=(team1Score1+team1Score2+team1Score3)/3;
let team2Avg=(team2Score1+team2Score2+team2Score3)/3;
if(team1Avg>team2Avg && team1Avg>=100){
    console.log(`${team1} wins with ${team1Avg} points`);
}
else if(team2Avg>team1Avg && team2Avg>=100){
    console.log(`${team2} wins with ${team2Avg} points`);
}
else if(team1Avg===team2Avg && team1Avg>=100 && team2Avg>=100){
    console.log(`It's a draw`);
}
else{
    console.log(`No team wins`);
}



