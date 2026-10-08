let mrp = [100, 50, 250]
{
    let discountedPrice = [];
    for (value of mrp) {
        discountedPrice.push(value * 0.9)//discount = 10%
    }
    console.log(mrp);
    console.log(discountedPrice);
}

{
    let discountedPrice = []
    mrp.forEach((value) => discountedPrice.push(value * 0.9))
    console.log(discountedPrice);
}

//map
let discountedprice = mrp.map((value) => value * 0.9)
console.log(discountedprice);



// array of objects
let ladile = [
    {
        naam: "priyalal",
        dhaam: "nikunj",
        roll: 1
    },
    {
        naam: "sitaram",
        dhaam: "saket",
        roll: 1
    }
]

//wihtout map
{

    let ladileNaam = []
    ladile.forEach((ladili) =>
        ladileNaam.push(ladili.naam)
    )
    console.log(ladileNaam);

}


// with map
{
    const ladileNaam = ladile.map((ladili) => ladili.naam)
    console.log(ladileNaam);

    const ladileDhaam = ladile.map((ladili) => ladili.dhaam)
    console.log(ladileDhaam);
}
{
    const ladileRoll = ladile.map((ladili) => ladili.roll + 100)
    console.log(ladileRoll);

    let boosted = ladile.map((ladili) => ({
        ...ladili,
        roll: ladili.roll + 100
    }));
    console.log(boosted);

}
{
    
    let boosted = ladile.map((ladili) => [...ladile, ladili.roll += 100])
    console.log(boosted);
}