/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    var index1, index2, index3, el2, el3;
    var count = 0;
    for (var i = 0; i < preferences.length; i++) {
        for (var j = 0; j < preferences.length; j++) {
            if (preferences[i] == j) {
                index1 = i;
                index2 = j;
                index3 = preferences[j]-1;
                alert(index3 + "==" + preferences[i]);
                if (index3 == preferences[i]) count++;
            }
        }
    }
    return count;
};
//var arr = [2, 3, 1];
//getLoveTrianglesCount(arr);