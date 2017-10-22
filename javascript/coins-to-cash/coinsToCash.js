const piggyBank = {
    pennies: 342,
    nickels: 1,
    dimes: 0,
    quarters: 2,
    hello: 3
};

function dollarAmount() {
    let total = 0;
    const coinValues = {
        pennies: .01,
        nickels: .05,
        dimes: .1,
        quarters: .25
    };
    for (key in piggyBank) {
        if (key in coinValues) {
            total += piggyBank[key] * coinValues[key];
            console.log(total.toFixed(2));
        }             
    }
    console.log(total.toFixed(2));
}