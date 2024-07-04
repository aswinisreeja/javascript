function create(factor)
{
    return function(x)
    {
        return x*factor;
    }
}
const double=create(3)
console.log(double(3))
