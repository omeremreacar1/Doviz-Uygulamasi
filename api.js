class Api{
    constructor(){
        this.key = "fca_live_EASHAf0RjepxDCzpRKkv0YGMaSUWI51PVjTh6qLn";
        this.baseUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${this.key}`;
    }

    async getCurrencyDatas(firstCurrency, secondCurrency, inputValue){
        const currencies = await (await fetch(`${this.baseUrl}&base_currency=${firstCurrency}`)).json();

        let result = currencies.data[secondCurrency]*inputValue;
        
        return result;
    }
}