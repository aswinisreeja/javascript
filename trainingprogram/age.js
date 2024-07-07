function calculate(year)
{
    const current = new Date().getFullYear();
    const age=current-year
    return age;
}
    
const age = calculate(2000);
console.log("You are"+ age+"years old")