let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;

let ageRunner = 19;

if (ageRunner >= 18 && earlyRegister) {
    raceNumber += 1000;
}

if (ageRunner >= 18 && earlyRegister) {
    console.log(`Runner ${raceNumber} will start at 9:30am.`)
} else if (ageRunner >= 18 && !earlyRegister) {
    console.log(`Runner ${raceNumber} will run at 11:00am`)
} else if (ageRunner < 18) {
    console.log(`Runner ${raceNumber} will run at 12:30pm`)
} else {
    console.log('Something went wrong.')
}