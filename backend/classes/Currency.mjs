class Currency {
    constructor(amount) {
        this.name = "MarwCoin";
        this.ticker = "MRW";
        this.amount = amount;
    }

    get getAmount() {
        return this.amount;
    }
}

export default Currency;