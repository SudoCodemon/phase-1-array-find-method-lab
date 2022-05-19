// code your solution here
function superbowlWin(record) {
    const found = record.find(element => element.result === "W")
    if(found === undefined) {
        return undefined;
    } else {
        return found.year;
    }
}