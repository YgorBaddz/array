function studentInfo () {
    let name = ['sidorov', 'ivanov', 'boldyrev', 'smirnov'];
    let academPerfomance = [4.5, 3, 4, 5];
    let practic = [100, 125, 110, 105];

    for(let i = 0; i < name.length; i++) {
        console.log(`${name[i]} has a academic perfomance of ${academPerfomance[i]} and have worked for ${practic[i]}`);
    }
}
const showInfo = studentInfo();

console.log(showInfo);

