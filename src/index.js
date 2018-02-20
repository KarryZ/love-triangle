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
      /*  for (var j = 0; j < preferences.length; j++) {
            if (preferences[i] == j) {
                index1 = i; el1 = preferences[i];
                index2 = j;  el2 = preferences[j];
                index3 = preferences[j]; el3 = preferences[index3];
               // alert(preferences[index3] + "==" + i);
                if (el3 == index1) count++;
            }
        }*/
			index2 = preferences[i];
			index3 = preferences[index2];
		//	alert(index3 +"=="+ preferences[i])
			if(preferences[index3] == i) count++;
    }
    return count;
};
//var arr = [2, 3, 1];
//getLoveTrianglesCount(arr);