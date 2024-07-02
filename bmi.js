var weight=18.5;
var height=1.6;
var bmi=weight/(height*height)
if(bmi<=18.5)
    console.log("underweight")
else if(bmi<=24.9)
    console.log("normalweight")
else if(bmi<=29.9)
    console.log("overweight")
else
    console.log("obesity")