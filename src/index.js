module.exports = function longestConsecutiveLength(array) {
    var count = 1,
        arrCount = [];

    function compare(a, b) {
        return a - b;
    }
    array.sort(compare);

    array.map((item, index, arr) => {

        if (arr[index + 1] === item + 1) {
            count++;
        } else if (count > 1) {
            arrCount.push(count);
            count = 1;
        }

    });


    arrCount.sort(compare);

    return arrCount[arrCount.length - 1];
}
