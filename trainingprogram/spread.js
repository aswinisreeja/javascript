 function sum(a,b,...num)
 {
     let total=0;
     for(let nums of num){
         total+=nums;
     }
     return total;
 }
 console.log(sum(1,2,3,4,5,29))