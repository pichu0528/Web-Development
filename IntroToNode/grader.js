function average(arr){
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum/arr.length;
    return Math.round(avg);
}

var scores = [90,98,89,100,100,86,94];
console.log(average(scores));

var scores2=[40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));