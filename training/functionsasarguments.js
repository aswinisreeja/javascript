function higher(x,operation)
{
    return operation(x)
}
function double (x)
{
    return x*2
}
function square(x)
{
    return x*x
}
console.log(higher(3,double))
console.log(higher(2,square))