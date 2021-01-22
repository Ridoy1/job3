

function kilometerToMeter(kilometer){
    if(kilometer>=0){
        return kilometer*1000;  // 1 kilometer = 1000 meter ;
    }
    return 0;
}
var result = kilometerToMeter(12);
console.log(result);



function budgetCalculator(watch, mobile, laptop){
    
    if(watch>=0 && mobile>=0 && laptop>=0){

        var first = watch*50;
        var second = mobile*100;
        var third = laptop*500;
        var total=first+second+third;
    }
    return total;
}

var result = budgetCalculator(5, 6, 2);
console.log(result);


function hotelCost(day){
    if(day>=0){
        var totalVara = 0;
        if(day<=10){
            totalVara = day*100;
        }
        else if(day<=20){
            var firstPart = 10*100;
            var remaining = day-10;
            var secondPart = remaining*80;
            totalVara = firstPart + secondPart;
        }
        else{
            var firstPart = 10*100;
            var secondPart = 10*80;
            var remaining = depth-20;
            var thirdPart = remaining*50;
            totalVara = firstPart+secondPart+thirdPart;
        }
        return totalVara;
    }
    else{
        return 0;
    }
}
var total = hotelCost(20);
console.log(total);


