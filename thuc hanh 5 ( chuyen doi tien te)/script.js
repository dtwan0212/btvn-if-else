function main()
{
    let amount = document.getElementById("amount").value
    let fromCurrency = document.getElementById("fromCurrency").value
    let toCurrency = document.getElementById("toCurrency").value
    let exchangeRate = 23000
    let result
    {
        if (fromCurrency === "VNĐ" && toCurrency === "USD")
        {
            result = amount / exchangeRate
            finalResult.innerHTML = result + "USD" 
        }
        else if (fromCurrency === "USD" && toCurrency === "VNĐ")
        {
            result = amount * exchangeRate
            finalResult.innerHTML = result + "VNĐ"
        }
    } 
}