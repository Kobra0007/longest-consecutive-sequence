module.exports = function longestConsecutiveLength(array) {
    var count = 1,
        arrCount = [];

    function compare(a, b) {
        return a - b;
    }
    array.sort(compare);
    if (array.length > 1) {
        for (var i = 0; i < array.length; i++) {

            if (array[i + 1] === array[i]) continue;
            if (array[i + 1] === array[i] + 1) {
                count++;
            } else if (count >= 1) {
                arrCount.push(count);
                count = 1;
            }

        };
    } else if (array.length == 1) {
        return 1;
    } else {
        return 0;
    }
    arrCount.sort(compare);

    return arrCount[arrCount.length - 1];
}
