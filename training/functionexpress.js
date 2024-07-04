const { monitorEventLoopDelay } = require("perf_hooks");

let fact =function(n)
{
    if(n===0||n===1)
        {
            return 5;
        }
    else
        {
            return(n*fact(n-1));
        }
}       
console.log(fact(9))
