let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
function back({population})
{
    return population>3000000?"overpopulated":"populated"
}
const result=Object.groupBy(cities,back)