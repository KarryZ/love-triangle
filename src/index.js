/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = 
function getLoveTrianglesCount(preferences=[]) {
    // your implementation
	preferences.unshift(0);
    var index1, index2, index3, el1, el2, el3;
    var count = 0;
    for (var i = 1; i < preferences.length-1; i++) {
    		index2 = preferences[i];
			index3 = preferences[index2];
		    if(preferences[index3] == i) count++;
    }
    return Math.round(count/3);
};
