//enter a number from 1 to 4 to remove someone. if you enter more than 4 then all will show up
function whoWillYouDeleteByUsingItsNumber(deleted) {
    let name = ['sidorov', 'ivanov', 'boldyrev', 'smirnov'];
    let academPerfomance = [4.5, 3, 4, 5];
    let practic = [100, 125, 110, 105];

    let sidorov = `1. ${name[0]} has a academic perfomance of ${academPerfomance[0]} and have worked for ${practic[0]}`;
    let ivanov = `2. ${name[1]} has a academic perfomance of ${academPerfomance[1]} and have worked for ${practic[1]}`;
    let boldyrev = `3. ${name[2]} has a academic perfomance of ${academPerfomance[2]} and have worked for ${practic[2]}`;
    let smirnov = `4. ${name[3]} has a academic perfomance of ${academPerfomance[3]} and have worked for ${practic[3]}`;

    if (deleted == undefined) {
        return "Please enter value";
    }
    else if(deleted > 4) return sidorov + "; " + ivanov + "; " + boldyrev + "; " + smirnov;
    else if (deleted == 1) return ivanov + "; " + boldyrev + "; " + smirnov;
    else if (deleted == 2) return sidorov + "; " + boldyrev + "; " + smirnov;
    else if (deleted == 3) return sidorov + "; " + ivanov + "; " + smirnov;
    else if (deleted == 4) return sidorov + "; " + ivanov + "; " + boldyrev;
}

whoWillYouDeleteByUsingItsNumber();

console.log(whoWillYouDeleteByUsingItsNumber());



