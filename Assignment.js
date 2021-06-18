//1.kiloMetreToMeter
function kiloMetreToMeter(kiloMetre){
    if(kiloMetre>=1 && kiloMetre<=100000){
        var metre = kiloMetre * 1000;
    }
    else{
        console.log("Enter A valid Numeric Value");
        }
        
    return metre;
}
kiloMetreToMeter(340);


//2.budgetCalculator

function budgetCalculator(watch, phone, laptop){
    
    var watchPrice  = watch  * 50;
    var phonePrice  = phone  * 100;
    var laptopPrice = laptop * 500;
    var totalPrice  = watchPrice + phonePrice + laptopPrice;

    return totalPrice;
}
budgetCalculator(2, 1, 3);

//3.hotelCost

function hotelCost(days){

    if(days>=1 && days<=100000){

        if(days <=10){
            var price = days*100;
        }
        else if(10<days && days<=20){
            var count = (days - 10);
            var price = (count*80)+1000;
        }
        else{
            var count = (days - 20);
            var price = (count*50)+1800;
        }
    }
    else{
        console.log("Enter A valid Numeric Value");
    }
    
    return price;
}
hotelCost(190);

//4.megaFriends
function megaFriends(name){
    
    var max = name[0];
    for(var i=0; i<name.length; i++){
       var element = name[i]
       if(max.length < element.length ){
           max = element;
       }
    }
    return max;
}
megaFriends(["Sakib", "Iftikakaka", "Lil", "AkbarAli"]);

