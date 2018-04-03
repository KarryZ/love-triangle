/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = 
function getLoveTrianglesCount(preferences=[]) {
   var count = 0;
    var first, second;
    for(var i = 0; i < preferences.length; i++){
        first = preferences[i];
        second = preferences[first - 1];
        if(preferences[second - 1] == i + 1) count++;
        
    }
    return Math.floor(count/3);
};
